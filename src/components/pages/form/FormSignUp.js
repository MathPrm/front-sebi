import '../../../assets/styles/pages/form/form-sign-up.css';
import Sebi from '../../../assets/images/sebi.svg'


function FormSignUp() {
    return (
        <div className='form-sign-up'>
            <div className="sebi">
                <img src={Sebi} alt='sebi la gazelle'></img>
                <div className='bulle'><p>
                    Pour te créer un compte c'est par ici !</p>
                </div>
            </div>
            <form className='sign-up-form'>
                <h2 className='form-title'>Inscription</h2>
                <label for="username">Surnom</label>
                <input type="text" name="username" id="username"></input>
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" required />
                <label for="password">Mot de passe</label>
                <input type="password" name="password" id="password"></input>
                <button type="submit" className="login-button">Connexion</button>
            </form>
        </div>
    )
}

export default FormSignUp;