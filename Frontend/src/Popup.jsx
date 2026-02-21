import { useEffect, useState } from "react";
import './Popup.css'
import { getURL } from "./Server/backendComs";



export default function Captcha() {
  const [targetCategory, setTargetCategory] = useState("");
  const [images, setImages] = useState([]);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [message, setMessage] = useState("");
  const [correctIndexes, setCorrectIndexes] = useState([]);

  const shuffle = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };
  const imagePool = {cat:["Cat1.jpg", "Cat2.jpg", "Cat3.jpg", "Cat4.jpg"], 
                    dog:["Dog1.jpg", "Dog2.jpg", "Dog3.jpg", "Dog4.jpg"],
                    deer:["Deer1.jpg", "Deer2.jpg", "Deer3.jpg", "Deer4.jpg"],
                    bird:["Bird1.jpg", "Bird2.jpg", "Bird3.jpg", "Bird4.jpg"]
                    };
  const loadCaptcha = () => {
    const allCategories = Object.keys(imagePool);

    const randomCategory =
      allCategories[Math.floor(Math.random() * allCategories.length)];

    setTargetCategory(randomCategory);

    const targetImages = shuffle(imagePool[randomCategory]).slice(0, 4);

    const otherCategories = allCategories.filter(
      (cat) => cat !== randomCategory
    );

    let otherImages = [];

    while (otherImages.length < 5) {
      const randomCat =
        otherCategories[
          Math.floor(Math.random() * otherCategories.length)
        ];

      const randomImage =
        imagePool[randomCat][
          Math.floor(Math.random() * imagePool[randomCat].length)
        ];

      otherImages.push(randomImage);
    }

    const allImages = shuffle([...targetImages, ...otherImages]);

    const correct = allImages
      .map((img, index) => ({ img, index }))
      .filter((item) => targetImages.includes(item.img))
      .map((item) => item.index);

    setImages(allImages);
    setCorrectIndexes(correct);
    setSelectedIndexes([]);
    setMessage("");
  };

  const toggleSelection = (index) => {
    setSelectedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const verifyCaptcha = () => {
    const isCorrect =
      selectedIndexes.length === 4 &&
      correctIndexes.every((index) => selectedIndexes.includes(index));

    if (isCorrect) {
      setMessage("CAPTCHA PASSED!");
      setTimeout(() => {
        window.location.href = getURL()}, 1000);
    } else {
      setMessage("Incorrect! Refreshing...");
      setTimeout(loadCaptcha, 1000);
    }
  };

  useEffect(() => {
    loadCaptcha();
  }, []);

  return (
    <div className="captcha-card">
      <div className="captcha-header">
        <h2>
          Select all images containing a{" "}
          <span>{targetCategory}</span>
        </h2>
      </div>

      <div className="captcha-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={`/src/images/${img}`}
            alt="captcha"
            className={`captcha-image ${
              selectedIndexes.includes(index) ? "selected" : ""
            }`}
            onClick={() => toggleSelection(index)}
          />
        ))}
      </div>

      <div className="captcha-footer">
        <span style={{ color: message.includes("PASSED") ? "green" : "red" }}>
          {message}
        </span>

        <button onClick={loadCaptcha}>🔄</button>
        <button onClick={verifyCaptcha}>Verify</button>
      </div>
    </div>
  );
}