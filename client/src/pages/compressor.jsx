import "../styles/compressor.scss"
const Compressor = () => {

    return (
        <div className="compressor-container">
            <div className="compressor-left">
                <h3>Upload-Image</h3>
                <div className="upload-image-box"></div>
                <div className="upload-compress-btn">
                    <button>upload image</button>
                    <button>compress image</button>
                </div>
            </div>
            <div className="compressor-right">
                <h3>Compress-Image</h3>
                <div className="compress-image-box"></div>
                <button>download image</button>
            </div>
        </div>
    )
}

export default Compressor;