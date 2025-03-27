import '../../assets/styles/games.css';
import Sebi from '../Sebi'
import ListGames from '../ListGames'

function GameList() {
    return (
        <div className='games-list'>
           <Sebi text = "c'est partit pour de nouvelle aventures ! "/>
            <div className='games-block'>
                <ListGames/> 
                <p>Les <b>jeux</b> te rapport des <b>points</b>.<br/>
                    Ces <b>points</b> te permettent de <b>gagner</b> des <b>images</b> 
                    et de les <b>ranger</b> dans ton <b>livre à images</b> disponible dans 
                    ton <b>profil</b>
                </p>
            </div>
           
        </div>
    )
}

export default GameList;