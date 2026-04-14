import { useEffect, useState } from "react";
import heroImg1 from "./assets/pictures/marcelo-leal-k7ll1hpdhFA-unsplash.jpg";
import heroImg2 from "./assets/pictures/landing_page.jpg";
import heroImg3 from "./assets/pictures/example1.jpg";
import heroImg4 from "./assets/pictures/example2.jpg";

const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4];

function Landing() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? heroImages.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="landing-page-container">
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`landing-background ${
                        index === currentIndex ? "active" : ""
                    }`}
                    style={{ backgroundImage: `url(${image})` }}
                />
            ))}

            <div className="landing-overlay"></div>

            <button className="slide-arrow left-arrow" onClick={goToPrevious}>
                ‹
            </button>

            <button className="slide-arrow right-arrow" onClick={goToNext}>
                ›
            </button>

            <div className="landing-content">
                <h2 className="landing-title">Medical Entries Exchange</h2>
                <h3 className="landing-description">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur
                    adipiscing elit quisque faucibus ex sapien vitae.
                </h3>
                <button className="read-more">
                    <span>Read More</span>
                </button>
            </div>

            <div className="slider-dots">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? "active-dot" : ""}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Landing;