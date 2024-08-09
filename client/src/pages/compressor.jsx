import { useState } from "react";
import "../styles/compressor.scss"
const Compressor = () => {
    const [images, setImages] = useState(
        {
            uploadImage: "",
            uploadImageSize: 0,
            compressImage: "",
            compressImageSize: 0
        }
    )

    // upload image =>
    const handleUpload = (e) => {
        let file = e.target.files[0];
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
            setImages({ ...images, uploadImage: e.target.result, uploadImageSize: Math.round(file.size / 1000, 1) })
        }
        fileReader.readAsDataURL(file)
    }
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
                    <img src={images.uploadImage ? images.uploadImage : "https://www.certificate.digital/images/theme/resize/cropping.webp"} alt="Image not uploaded!" />
                </div>
                <div className="upload-compress-btn">
                    <button>
                        <label for="inputUpload">Upload Image</label>
                        <input id="inputUpload" type="file" style={{ display: "none" }} onChange={handleUpload} />
                    </button>
                    <button onClick={handleCompress}>Compress image</button>
                </div>
            </div>
            <div className="image-sizes">
                <div className="uploaded-img-size">
                    <p>Uploaded - {images.uploadImageSize}kb</p>
                </div>
                <div className="compressed-img-size">
                    <p>Copmressed - {images.compressImageSize}kb</p>
                </div>
            </div>
            <div className="compressor-right">
                <h3>Compressed-Image</h3>
                <div className="compress-image-box">
                    <img src={images.compressImage ? "" : "https://eccentriceclectic.wordpress.com/wp-content/uploads/2014/06/waiting-time.png"} alt="No Image Found!" />
                </div>
                <a href="https://eccentriceclectic.wordpress.com/wp-content/uploads/2014/06/waiting-time.png" download="https://eccentriceclectic.wordpress.com/wp-content/uploads/2014/06/waiting-time.png">
                    <button onClick={handleDownload} >download image</button>
                </a>
            </div>
        </div>
    )
}

export default Compressor;