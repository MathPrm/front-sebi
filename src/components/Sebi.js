import imgSebi from '../assets/images/sebi.webp'
import '../assets/styles/sebi.css'

function Sebi(props){
    return(
        <div className="container">
            <div className='bulle'>{props.text}</div>
            <img src={imgSebi} className='sebi'  alt='sebi la gazelle'></img>
        </div>
    )
}

export default Sebi;