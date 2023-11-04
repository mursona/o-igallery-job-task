import React, { useState } from 'react';
import img1 from '../../assets/images/image-1.webp';
import img2 from '../../assets/images/image-2.webp';
import img3 from '../../assets/images/image-3.webp';
import img4 from '../../assets/images/image-4.webp';
import img5 from '../../assets/images/image-5.webp';
import img6 from '../../assets/images/image-6.webp';
import img7 from '../../assets/images/image-7.webp';
import img8 from '../../assets/images/image-8.webp';
import img9 from '../../assets/images/image-9.webp';
import img10 from '../../assets/images/image-10.jpeg';
import img11 from '../../assets/images/image-11.jpeg';

const Testorder = () => {
    const [items, setItems] = useState([      { id: 1, img: img1 },
      { id: 2, img: img2 },
      { id: 3, img: img3 },
      { id: 4, img: img4 },
      { id: 5, img: img5 },
      { id: 6, img: img6 },
      { id: 7, img: img7 },
      { id: 8, img: img8 },
      { id: 9, img: img9 },
      { id: 10, img: img10 },
      { id: 11, img: img11 },]);
    
      const [images, setImages] = useState([
        { id: 2, img: img2 },
        { id: 3, img: img3 },
        { id: 4, img: img4 },
        { id: 5, img: img5 },
        { id: 6, img: img6 },
        { id: 7, img: img7 },
        { id: 8, img: img8 },
        { id: 9, img: img9 },
        { id: 10, img: img10 },
        { id: 11, img: img11 },
        // Add more images here
      ]);

      const [isDragging, setIsDragging] = useState(false);
      const [dragIndex, setDragIndex] = useState(-1);
      const [dragOffset, setDragOffset] = useState(0);

      const startDrag = (index, event) => {
        setDragIndex(index);
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text", index);
      };

      const onDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
      };

      const onDrop = (index, event) => {
        event.preventDefault();
        const movedImageIndex = event.dataTransfer.getData("text");
        if (movedImageIndex !== "") {
          const fromIndex = parseInt(movedImageIndex);
          const toIndex = index;

          // Rearrange the images array
          const movedImage = images[fromIndex];
          const updatedImages = [...images];
          updatedImages.splice(fromIndex, 1);
          updatedImages.splice(toIndex, 0, movedImage);
          setImages(updatedImages);
        }
        setDragIndex(-1);
      };

      return (
        <div className="container">
          <h3>Reactjs Rearrange Image Position</h3>
          <div className="image-container">
            {images.map((image, index) => (
              <div
                key={index}
                draggable="true"
                onDragStart={(event) => startDrag(index, event)}
                onDragOver={(event) => onDragOver(event)}
                onDrop={(event) => onDrop(index, event)}
              >
                <img src={image.img} alt="Image" />
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Testorder;