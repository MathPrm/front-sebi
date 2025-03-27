import { Link } from 'react-router-dom';
import '../assets/styles/button.css'

function Button({to,label}){
    
    
    return (
        <nav className='buttons'>
            <Link to={to} className='button'>{label}</Link>
        </nav>
    )
}

export default Button