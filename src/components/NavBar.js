import '../assets/styles/navBar.css';
import Logo from '../assets/images/logo.png'
import Button from './Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar({links}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <nav className='navbar'>
            <div className='logo'> 
                <Link to="/">
                    <img src={Logo} alt="Logo"/>
                </Link>
            </div> 
            <button className={`burger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                {/*barre menu burger*/}
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`btns ${isOpen ? 'active' : ''}`}>
                {links.map((link,index)=>(
                    <div key={index}>
                        <Button
                            to={link.path} 
                            label={link.label}
                            isHome={link.path === '/'}
                        >
                        </Button>
                    </div>
                ))}
            </div>
        </nav>
    );
}

export default NavBar