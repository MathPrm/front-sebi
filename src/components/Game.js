function Game(props){
    return(
        <div>
            <img src={props.img} alt={props.gameName}></img>
            <p>{props.gameName}</p>
        </div>
    )
}
export default Game;