import '../../assets/styles/pages/games.css';
import Sebi from '../../assets/images/sebi.svg'
import ListGames from '../ListGames'

function GameList() {
    return (
        <div className='games-list'>
            <div className="sebi">
                <img src={Sebi} alt='sebi la gazelle'></img>
                <div className='bulle'>
                    <p>C'est parti pour de nouvelles aventures</p>
                </div>
            </div>
            <div className='games-block'>
                <ListGames/> 
                <p>
                    Les <b>jeux</b> te rapportent des <b>points</b>.<br/>
                    Ces <b>points</b> te permettent de <b>gagner</b> des <b>images</b> et 
                    de les <b>ranger</b> dans ton <b>livre à images</b> disponible dans 
                    ton <b>profil</b>.
                </p>
            </div>
        </div>
    )
}

export default GameList;