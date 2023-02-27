import meme from "../images/troll.png"

export default function Header() {
    return (
        <div className="header">

            <img src={meme} className="meme" />
            <h3>Meme Generator</h3>
            <h2>React Course - Project 3</h2>
        </div>
    )
}