import '../assets/styles/home.css';
import Sebi from './Sebi'
import ListGames from './listGames'

function Home() {
    return (
        <div className='home'>
            <Sebi text = "c'est partit pour de nouvelle aventures nouvelle branch!"/>
            <ListGames/>
        </div>
    )
}

export default Home;