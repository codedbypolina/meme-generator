
export default function Main(props) {
    function showImage() {
        let memeArray = props.item.data.memes
        let randomNumber = Math.floor(Math.random() * memeArray.length)
        let memeUrl = memeArray[randomNumber].url
        console.log(memeUrl)
    }
    return (
        <div>
            <div className="input-section">
                <input type="text" className="first-input" placeholder="Top text" />
                <input type="text" className="second-input" placeholder="Bottom Text" />
            </div>
            <div className="image-section" onClick={showImage}><button>Get a new meme image  🖼</button></div>

            <div className="image-output">
            </div>
        </div>
    )
}