import { useState } from "react";

const images = [
  "https://i.imgur.com/MK3eW3Am.jpg",
  "https://i.imgur.com/1bX5QH6.jpg",
  "https://i.imgur.com/sZlktY7.jpg"
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function nextImage() {
    setIndex((index + 1) % images.length);
  }

  return (
    <div>
      <button onClick={nextImage}>Próxima</button>
      <br />
      <img src={images[index]} alt="Imagem" width="200" />
    </div>
  );
}
