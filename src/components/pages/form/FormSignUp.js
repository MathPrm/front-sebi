import '../../../assets/styles/pages/form/form-sign-up.css';
import Sebi from '../../../assets/images/sebi.svg'
import { useState } from 'react';

function FormSignUp() {
    const [texteInput, setTextinput] = useState({
        username:"",
        "email": "",
        password:""
    });
    const [text, setText] = useState("");

    const handleSubmit = async (e) => {

        try {
            e.preventDefault();
            if( texteInput.username.length >= 3  && texteInput.password.length >= 7 ){
                setText(texteInput.username);
            }
            else{
                setText();
            }
            
            const formData = texteInput;

            const response = await fetch("http://127.0.0.1:8080/api/user/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            
            if (response.ok) {
                console.log("Inscription réussie:", data);
            } else {
                console.error("Erreur lors de l'inscription:", data);
            }
        } catch (error) {
            console.error("Erreur:", error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target
        setTextinput(prevTexteInput => ({...prevTexteInput, [name]: value}));
    }

    return (
        <div className='form-sign-up'>
            <div className="sebi">
                <img src={Sebi} alt='sebi la gazelle'></img>
                <div className='bulle'>Pour te créer un compte c'est par ici !</div>
            </div>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2 className='form-title'>Inscription</h2>
                <label htmlFor="username">Surnom</label>
                <input type="text" name="username" id="username" onChange={handleChange}></input>
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" onChange={handleChange} required />
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" onChange={handleChange}></input>
                <button type="submit" className="login-button">Inscription</button>
            </form>
        </div>
    )
}

export default FormSignUp;