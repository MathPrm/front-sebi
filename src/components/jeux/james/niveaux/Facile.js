import React, { useState, useEffect, useRef } from 'react';
import '../../../../assets/styles/jeux/james/level.css';
import { Link } from 'react-router-dom';
import James from '../../../../assets/images/james.webp';
import RotatePhone from '../../../../assets/images/rotate-phone.png';

const JeuCalcul = () => {
    const [score, setScore] = useState(0);
    const [niveau, setNiveau] = useState(1);
    const [question, setQuestion] = useState('');
    const [reponses, setReponses] = useState([]);
    const [bonneReponse, setBonneReponse] = useState(null);
    const [secondes, setSecondes] = useState(0);
    const [message, setMessage] = useState('');
    const [buttonStates, setButtonStates] = useState(Array(4).fill(''));
    const chronoRef = useRef(null);

    const maxTime = 30;
    const ratio = 100 / maxTime;

    useEffect(() => {
        genererQuestion();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondes(prev => {
                if (prev >= maxTime) {
                    clearInterval(timer);
                    setMessage('Le temps est écoulé');
                    setTimeout(() => {
                        resetJeu();
                    }, 5000);
                    return prev;
                }
                return prev + 1;
            });
        }, 1000);

        chronoRef.current = timer;
        return () => clearInterval(timer);
    }, [question]);

    const calculNiveau = (currentScore) => {
        if (currentScore <= 5) return 1;
        if (currentScore <= 10) return 2;
        if (currentScore <= 15) return 3;
        return 4;
    };

    const genererQuestion = () => {
        clearInterval(chronoRef.current);
        setSecondes(0);
        setMessage('');
        setButtonStates(Array(4).fill(''));

        let a = Math.floor(Math.random() * 11);
        let b = Math.floor(Math.random() * 11);
        let resultat;
        let operation = '';

        const currentNiveau = calculNiveau(score);
        setNiveau(currentNiveau);

        switch (currentNiveau) {
            case 1:
                resultat = a + b;
                operation = `${a} + ${b} =`;
                break;
            case 2:
                while (b > a) b = Math.floor(Math.random() * 11);
                resultat = a - b;
                operation = `${a} - ${b} =`;
                break;
            case 3:
                resultat = a * b;
                operation = `${a} x ${b} =`;
                break;
            case 4:
                [a, b, resultat] = genererDivision();
                operation = `${a} / ${b} =`;
                break;
            default:
                break;
        }

        setQuestion(operation);
        setBonneReponse(resultat);
        genererReponses(resultat);
    };

    const genererDivision = () => {
        let a = Math.floor(Math.random() * 11);
        let bOptions = {
            10: [10,5,2,1], 9:[9,3,1], 8:[8,4,2], 7:[7,1],
            6:[6,3,1], 5:[5,1], 4:[4,2,1], 3:[3,1], 2:[2,1], 1:[1]
        };
        let bList = bOptions[a] || [1];
        let b = bList[Math.floor(Math.random() * bList.length)];
        return [a, b, a / b];
    };

    const genererReponses = (resultat) => {
        let arr = [];
        while (arr.length < 3) {
            let alea = Math.floor(Math.random() * 21);
            if (!arr.includes(alea) && alea !== resultat) {
                arr.push(alea);
            }
        }
        arr.push(resultat);
        arr = arr.sort(() => Math.random() - 0.5);
        setReponses(arr);
    };

    const verifierReponse = (rep, index) => {
        clearInterval(chronoRef.current);
        const newButtonStates = [...buttonStates];
        
        if (rep === bonneReponse) {
            newButtonStates[index] = 'correct';
            setButtonStates(newButtonStates);
            setMessage(rep);
            setScore(prev => prev + 1);
        } else {
            newButtonStates[index] = 'incorrect';
            const correctIndex = reponses.indexOf(bonneReponse);
            newButtonStates[correctIndex] = 'correct';
            setButtonStates(newButtonStates);
            setMessage(bonneReponse);
        }
        
        setTimeout(() => {
            resetJeu();
        }, 2000);
    };

    const resetJeu = () => {
        genererQuestion();
    };

    return (
        <section id="level">
            <div className="landscape">
                    <div className="score">
                        <div id="niveaux">NIVEAU {niveau}</div>
                        <div id="score">{score} POINT(S)</div>
                    </div>
                    <div className="facile">
                        <Link to="/games/james/choix-du-niveau" id="home">
                            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
                            </svg>
                        </Link>
                        <div id="leftBlock">
                            <div id="bulle">
                                <div id="bulleInt"></div>
                                <div id="number">{question}</div>
                                {message && <div id="correct">{message}</div>}
                                <div id="triangle"></div>
                                <div id="triangle2"></div>
                            </div>
                            <div id="blockResFacile">
                                {reponses.map((rep, index) => (
                                    <button 
                                        key={index} 
                                        className={`response ${buttonStates[index]}`} 
                                        onClick={() => verifierReponse(rep, index)}
                                    >
                                        {rep}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div id="rightBlock">
                            <div id="hiboux-lvl">
                                <img src={James} height={100} alt="James le hiboux" />
                            </div>
                        </div>
                    </div>
                    <div id="chrono" style={{ '--progress-width': `${secondes * ratio}%` }}>
                        <span>{secondes >= maxTime ? "Le temps est écoulé" : maxTime - secondes}</span>
                    </div>
            </div>
            <div className="portrait">
                <img className="rotate" src={RotatePhone} alt="Rotate your phone" />
                <p>Tourne ton écran</p>
            </div>
        </section>
    );
};

export default JeuCalcul;
