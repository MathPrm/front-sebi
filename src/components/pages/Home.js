import '../../assets/styles/pages/home.css';
import ListGames from '../ListGames'
import Sebi from '../../assets/images/sebi.svg'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <div className="sebi">
                <img src={Sebi}  alt='sebi la gazelle'></img>
                <div className='bulle'>Bienvenue dans le monde de Sebi la gazelle ! Partons ensemble à l'aventure !</div>
            </div>
            <div className='list-games'>
                <ListGames/>
            </div>
        </div>
    )
}

export default Home;