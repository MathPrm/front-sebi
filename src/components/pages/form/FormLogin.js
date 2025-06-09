import '../../../assets/styles/pages/form/form-login.css';
import Sebi from '../../../assets/images/sebi.svg'
import { useState } from 'react';

function Login() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            const response = await fetch('http://127.0.0.1:8080/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputs)
            });

            const data = await response.json();

            if (!response.ok) {
                setErrorMessage(data.error || 'Erreur inconnue');
                return;
            }

            // Connexion réussie
            console.log('Connexion réussie !', data);
            setErrorMessage('Connexion réussie !');
            // Tu peux stocker le token ici dans le localStorage
            // localStorage.setItem("token", data.token);
                        
            const user = users.find(u => u.email === inputs.email);
            
            if (!user) {
                setErrorMessage('Email non trouvé');
                return;
            }

            // Vérification du mot de passe (à faire côté serveur normalement)
            if (user.password !== inputs.password) {
                setErrorMessage('Mot de passe incorrect');
                return;
            }

            // Connexion réussie
            console.log('Connexion réussie !');
            setErrorMessage('Connexion réussie !');
            
            // Ici vous pouvez rediriger l'utilisateur ou stocker son token
            
        } catch (error) {
            console.error('Erreur:', error);
            setErrorMessage('Erreur de connexion au serveur');
        }
    };

    return (
        <div className='form-login'>
            <div className="sebi">
                <img src={Sebi} alt='sebi la gazelle'></img>
                <div className='bulle'>Contente de te revoir !</div>
            </div>
           
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="form-title">CONNEXION</h2>
                
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                
                <label htmlFor="email">E-mail:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={inputs.email}
                    onChange={handleChange}
                    required 
                />
                
                <label htmlFor="password">Mot de passe</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={inputs.password}
                    onChange={handleChange}
                    required 
                />
                
                <button type="submit" className="login-button">Connexion</button>
            </form>
        </div>
    );
}

export default Login;


