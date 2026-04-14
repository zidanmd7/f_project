import { useEffect, useState } from "react";
import heroImg1 from "./assets/pictures/marcelo-leal-k7ll1hpdhFA-unsplash.jpg";
import heroImg2 from "./assets/pictures/landing_page.jpg";
import heroImg3 from "./assets/pictures/example1.jpg";
import heroImg4 from "./assets/pictures/example2.jpg";


const slides = [
    {
    image: heroImg1,
    title: "Medical Entries Exchange",
    description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae.",
    buttonText: "Read More",
    },
    {
        image: heroImg2,
        title: "Better Health Connections",
        description:
            "Helping providers, patients, and systems stay connected with smooth access to important medical information.",
        buttonText: "Learn More",
    },
    {
        image: heroImg3,
        title: "Better Health Connections",
        description:
            "slide 3 *add more words later*",
        buttonText: "Learn More",
    },

    {
        image: heroImg4,
        title: "Better Health Connections",
        description:
            "slide 4 *add more words later*",
        buttonText: "Learn More",
    },

];



function Landing() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 50000);

        return () => clearInterval(interval);
    }, []);

    const currentSlide = slides[currentIndex];

    return (
        <div className="landing-page-container">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`landing-background ${index === currentIndex ? "active" : ""}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
            ))}

            <div className="landing-overlay"></div>

            <button className="slide-arrow left-arrow" onClick={goToPrevious}>
                ‹
            </button>

            <button className="slide-arrow right-arrow" onClick={goToNext}>
                ›
            </button>

            <div className="landing-content">
                <h2 className="landing-title">{currentSlide.title}</h2>
                <h3 className="landing-description">{currentSlide.description}</h3>
                <button className="read-more">
                    <span>{currentSlide.buttonText}</span>
                </button>
            </div>

            <div className="slider-dots">
                {slides.map((_, index) => (
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