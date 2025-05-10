import { Link } from 'react-router-dom';
import '../assets/styles/button.css'

function Button({to,label,isHome}){
    
    
    return (
        <nav className={isHome ? 'home-button' : 'buttons'}>
            <Link to={to} className={isHome ? 'home-link' : 'button'}>{label}</Link>
        </nav>
    )
}

export default Button