import React, { useEffect, useState } from 'react';
import slide1 from '../assets/slide1.png'
import slide2 from'../assets/slide2.png'
import slide3 from '../assets/slide3.png'
import slide4 from '../assets/slide4.png'
import slide5 from'../assets/slide5.png'
import slide6 from '../assets/slide6.png'
// Replace these URLs with your actual image URLs
const images = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div style={sliderStyle} >
            <div style={{ ...slidesStyle, transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div style={slideStyle} key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} style={imageStyle} />
                    </div>
                ))}
            </div>
            <div style={dotsContainerStyle}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={{ ...dotStyle, backgroundColor: currentIndex === index ? 'black' : 'gray' }}
                    ></span>
                ))}
            </div>
        </div>
    );
};

// Integrated CSS styles
const sliderStyle = {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    height: '820px', // Adjust height as needed
};

const slidesStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out', // Smooth transition
    height: '100%',
};

const slideStyle = {
    minWidth: '100%', // Each slide takes full width
    height: '100%',
};

const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Cover the slide area
};

const dotsContainerStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '5px', // Space between dots
};

const dotStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
};

export default ImageSlider;
