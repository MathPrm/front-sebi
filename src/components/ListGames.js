import '../assets/styles/listGames.css'
import Game from './Game'

function ListGames(){
    return(
        <div className='containerGames'>
            <h1>Clique sur une des images pour accompagner Sebi</h1>
            <div className='games'>
                <Game img="" gameName="Le saut d'obstacle"/>
                <Game img="" gameName="James le hiboux"/>
            </div>
        </div>
    )
}

export default ListGames;