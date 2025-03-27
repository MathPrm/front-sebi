import '../assets/styles/navBar.css';
import Button from './Button';

function NavBar({links}){

    return(
        <nav className='navBar'>
            {links.map((link,index)=>(
                <div key={index}>
                    <Button to={link.path} label={link.label}></Button>
                </div>
            ))}
        </nav>
    );
}

export default NavBar