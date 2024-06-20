import { useState } from "react";
import "../styles/compressor.scss"
const Compressor = () => {
    const [images, setImages] = useState(
        {
            uploadImage: "",
            compressImage: ""
        }
    )

    // upload image =>
    const handleUpload = (e) => {
        let file = e.target.files[0];
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
            setImages({ ...images, uploadImage: e.target.result })
        }
        fileReader.readAsDataURL(file)
    }
    console.log(images)
    // compress image =>
    const handleCompress = () => {

    }
    // download image =>
    const handleDownload = () => {

    }

    return (
        <div className="compressor-container">
            <div className="compressor-left">
                <h3>Uploaded-Image</h3>
                <div className="upload-image-box">
                    <img src={images.uploadImage} alt="Image not uploaded!" />
                </div>
                <div className="upload-compress-btn">
                    <button>
                        <label for="inputUpload">Upload Image</label>
                        <input id="inputUpload" type="file" style={{ display: "none" }} onChange={handleUpload} />
                    </button>
                    <button onClick={handleCompress}>Compress image</button>
                </div>
            </div>
            <div className="compressor-right">
                <h3>Compressed-Image</h3>
                <div className="compress-image-box">
                    <img src={images.uploadImage} alt="No Image Found!" />
                </div>
                <button onClick={handleDownload}>download image</button>
            </div>
        </div>
    )
}

export default Compressor;