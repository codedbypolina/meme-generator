export default function Main() {
    return (
        <div>
            <div className="input-section">
                <input type="text" className="first-input" placeholder="Top text" />
                <input type="text" className="second-input" placeholder="Bottom Text" />
            </div>
            <div className="image-section"><button>Get a new meme image  🖼</button></div>

            <div className="image-output"></div>
        </div>
    )
}