
export default function Main(props) {
    function showImage() {
        let random = props.item.data.memes[Math.floor(Math.random() * 100)]
        console.log(random)
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