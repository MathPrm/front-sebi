import '../../../assets/styles/pages/form/form-login.css';
import Sebi from '../../Sebi'


function Login() {
    return (
        <div className='form-login'>
            <Sebi text="Contente de te revoir !"/>

           
            <form className="login-form">
                <h2 className="form-title">CONNEXION</h2>
                
                <label htmlFor="email">E-mail:</label>
                <input type="email" className="email" name="email" required />
                
                <label htmlFor="password">Mot de passe</label>
                <input type="password" className="password" name="password" required />
                
                <button type="submit" className="login-button">Connexion</button>
            </form>
        </div>
        
    )
}

export default Login;


