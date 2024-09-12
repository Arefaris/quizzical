export default function Hero(props){
    return <>
        <h1 className="title">Quizzical</h1>
        <h2 className="description">A lively quiz game that challenges players' knowledge across various topics with fun and engaging questions.</h2>
        <button onClick={props.showQ} className="start-btn">Start quiz</button>
        </>
}