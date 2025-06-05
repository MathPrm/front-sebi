import '../../../assets/styles/pages/form/form-sign-up.css';
import Sebi from '../../Sebi'


function FormSignUp() {
    return (
        <div className='form-sign-up'>
            <Sebi text="Pour te créer un compte c'est par ici !"/>
            
            <form className='sign-up-form'>
                <h2 className='form-title'>Inscription</h2>
                
                <label for="username">Surnom</label>
                <input type="text" name="username" className="username"></input>
                
                <label htmlFor="email">E-mail:</label>
                <input type="email" className="email" name="email" required />
                
                <label for="password">Mot de passe</label>
                <input type="password" name="password" className="password"></input>
                
                <button type="submit" className="login-button">Connexion</button>
            </form>
        </div>
    )
}

export default FormSignUp;