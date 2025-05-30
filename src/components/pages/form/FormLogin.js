import '../../../assets/styles/pages/form/form-login.css';
import Sebi from '../../../assets/images/sebi.svg'


function Login() {
    return (
        <div className='form-login'>
            <div className="sebi">
                <img src={Sebi}  alt='sebi la gazelle'></img>
                <div className='bulle'>
                    <p>Content de te revoir !</p>
                </div>
            </div>
           
            <form className="login-form">
                <h2 className="form-title">CONNEXION</h2>
                
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password" name="password" required />
                
                <button type="submit" className="login-button">Connexion</button>
            </form>
        </div>
        
    )
}

export default Login;


