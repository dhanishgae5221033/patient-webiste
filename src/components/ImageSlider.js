import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './componentsstyle.css';

const ImageSlider = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="image-slider">
      <Carousel
        selectedItem={activeSlide}
        onChange={handleSlideChange}
        autoPlay={false}
        showThumbs={false}
      >
       {images.map((image, index) => (
          <div key={index}>
            <img className="slider-image" src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
      <div className="dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
