import { useState } from "react";
import "./Slider.css"; // Import the CSS file for styling

const Slider = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousCard = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + cards.length) % cards.length,
        );
    };

    const goToNextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    return (
        <div className='slider-container'>
            <button className='slider-button' onClick={goToPreviousCard}>
                ❮
            </button>
            <div className='card'>
                <h2>{cards[currentIndex].name}</h2>
                <p>{cards[currentIndex].profession}</p>
            </div>
            <button className='slider-button' onClick={goToNextCard}>
                ❯
            </button>
        </div>
    );
};

export default Slider;
