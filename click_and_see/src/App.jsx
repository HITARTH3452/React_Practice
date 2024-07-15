import img1 from "./assets/cat1.webp";
import img2 from "./assets/cat2.webp";
import img3 from "./assets/cat3.webp";
import img4 from "./assets/cat4.webp";
// import { useState } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [img, setImg] = useState(null);

  const images = [img1, img2, img3, img4];

  const handleImageClick = (imgSelected) => {
    setImg(imgSelected);
  };

  return (
    <>
      <div className="container">
        <h1 className="h1">Click on an image</h1>
        <div className="imgCont">
          {/* <img onClick={() => handleImageClick(img1)} src={img1} alt="img1" />
          <img onClick={() => handleImageClick(img2)} src={img2} alt="img1" />
          <img onClick={() => handleImageClick(img3)} src={img3} alt="img1" />
          <img onClick={() => handleImageClick(img4)} src={img4} alt="img1" /> */}
          {images.map((image, index) => (
            <img
              key={index}
              onClick={() => handleImageClick(image)}
              src={image}
              alt={`img${index + 1}`}
            />
          ))}
        </div>
        {img && (
          <div className="selected img">
            <h2 className="h2">Selected Image</h2>
            <img src={img} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
