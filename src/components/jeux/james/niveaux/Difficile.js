import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../../../assets/styles/jeux/james/level.css';
import James from '../../../../assets/images/james.webp';
import RotatePhone from '../../../../assets/images/rotate-phone.png';



const JeuCalculInput = () => {
    const [score, setScore] = useState(0);
    const [niveau, setNiveau] = useState(1);
    const [question, setQuestion] = useState('');
    const [bonneReponse, setBonneReponse] = useState(null);
    const [userInput, setUserInput] = useState('');
    const [message, setMessage] = useState('');
    const [secondes, setSecondes] = useState(0);

    const chronoRef = useRef(null);
    const maxTime = 30;
    const ratio = 100 / maxTime;

    useEffect(() => {
        genererQuestion();
    }, []);

    useEffect(() => {
        chronoRef.current = setInterval(() => {
            setSecondes(prev => {
                if (prev >= maxTime) {
                    clearInterval(chronoRef.current);
                    setMessage(bonneReponse);
                    setTimeout(resetJeu, 5000);
                    return prev;
                }
                return prev + 1;
            });
        }, 1000);

        return () => clearInterval(chronoRef.current);
    }, [question]);

    const calculNiveau = (currentScore) => {
        if (currentScore <= 5) return 1;
        if (currentScore <= 10) return 2;
        if (currentScore <= 15) return 3;
        if (currentScore <= 20) return 4;
        return 5;
    };

    const genererQuestion = () => {
        clearInterval(chronoRef.current);
        setSecondes(0);
        setMessage('');
        setUserInput('');

        let a, b, resultat, operation = '';
        const currentNiveau = calculNiveau(score);
        setNiveau(currentNiveau);

        switch (currentNiveau) {
            case 1: // Addition simple
                a = rand(0, 9);
                b = rand(0, 9);
                resultat = a + b;
                operation = `${a} + ${b} =`;
                break;
            case 2: // Addition complexe
                a = rand(10, 100);
                b = rand(10, 100);
                resultat = a + b;
                operation = `${a} + ${b} =`;
                break;
            case 3: // Soustraction
                a = rand(0, 10);
                b = rand(0, a);
                resultat = a - b;
                operation = `${a} - ${b} =`;
                break;
            case 4: // Multiplication
                a = rand(0, 10);
                b = rand(0, 10);
                resultat = a * b;
                operation = `${a} x ${b} =`;
                break;
            case 5: // Division
                [a, b, resultat] = genererDivision();
                operation = `${a} / ${b} =`;
                break;
            default:
                break;
        }

        setQuestion(operation);
        setBonneReponse(resultat);
    };

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const genererDivision = () => {
        let a = rand(1, 10);
        const diviseurs = {
            10: [10,5,2,1], 9:[9,3,1], 8:[8,4,2], 7:[7,1],
            6:[6,3,1], 5:[5,1], 4:[4,2,1], 3:[3,1], 2:[2,1], 1:[1]
        };
        let bList = diviseurs[a] || [1];
        let b = bList[Math.floor(Math.random() * bList.length)];
        return [a, b, a / b];
    };

    const checkAnswer = () => {
        const rep = parseInt(userInput);
        clearInterval(chronoRef.current);

        if (rep === bonneReponse) {
            setMessage(rep);
            setScore(prev => prev + 1);
            setTimeout(resetJeu, 3000);
        } else {
            setMessage(bonneReponse);
            setTimeout(resetJeu, 5000);
        }
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
                <div className="difficile">
                    <Link to="/games/james/choix-du-niveau" id="home">
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
                        </svg>
                    </Link>
                    <div id="leftBlock">
                        <div id="bulle">
                            <div id="bulleInt"></div>
                            <div id="number">{question}</div>
                            {message && <div id={message === "Bien joué !" ? "correct" : "faux"}>{message}</div>}
                            <div id="triangle"></div>
                            <div id="triangle2"></div>
                        </div>
                        <div id='blockResDifficile'>
                            <input
                                id="response"
                                type="number"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                            />
                           <button id="btn" onClick={checkAnswer}>Valider</button>
                           
                        </div>
                    </div>
                    <div id="rightBlock">
                        <div id="hiboux-lvl">
                            <img src={James} height="100px" alt="James le hiboux" />
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

export default JeuCalculInput;
