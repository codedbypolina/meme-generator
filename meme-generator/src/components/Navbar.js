import meme from "../images/troll.png"

export default function Navbar() {
    return (
        <div className="navbar">

            <img src={meme} className="meme" />
            <h3>Meme Generator</h3>


            <h2>React Course - Project 3</h2>
        </div>
    )
}