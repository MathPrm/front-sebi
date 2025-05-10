import '../assets/styles/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/a-propos">À propos</Link>
        </footer>
    );
}

export default Footer;