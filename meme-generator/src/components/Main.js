/**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
import { useState } from "react"
import memesData from "../memeData.js"


export default function Main(props) {
    function showImage() {
        let memeArray = allMemeImgaes.data.memes
        let randomNumber = Math.floor(Math.random() * memeArray.length)
        let memeUrl = memeArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memeUrl
        }))
    }

    const [meme, setMeme] = useState([
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }])
    const [allMemeImgaes, setAllMemeImages] = useState(memesData)

    return (
        <div>
            <div className="input-section">
                <input type="text" className="first-input" placeholder="Top text" />
                <input type="text" className="second-input" placeholder="Bottom Text" />
            </div>
            <div className="image-section" onClick={showImage}><button>Get a new meme image  🖼</button></div>

            <div className="image-output">
                <img src={meme.randomImage} className="memeImage" />
            </div>
        </div>
    )
}