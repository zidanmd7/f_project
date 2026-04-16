import "./WhyChooseUs.css";
import medicalImage from "../assets/pictures/whychooseus.jpg";

function WhyChooseUs() {
    const benefits = [
        {
            title: "Doctors save time",
            text: "Doctors receive files in advance, saving time during appointments.",
        },
        {
            title: "Less back-and-forth",
            text: "Patients avoid repeated emails and missing documents.",
        },
        {
            title: "Secure sharing",
            text: "Files are shared securely and access-controlled.",
        },
    ];

    return (
        <section className="why-choose-section">
            <div className="why-choose-wrapper">
                <div className="why-choose-image">
                    <img src={medicalImage} alt="Medical professional reviewing records" />
                </div>

                <div className="why-choose-content">
                    <span className="why-choose-tag">Why Choose Us?</span>
                    <h2>Built for smoother medical document sharing</h2>
                    <p>
                        Make appointments easier by helping doctors and patients stay
                        organized, prepared, and secure before every visit.
                    </p>

                    <div className="why-choose-hover-area">
                        <div className="why-choose-intro">
                            <h3>Key Benefits</h3>
                            <p>Hover here to explore the benefits.</p>
                        </div>

                        <div className="benefit-cards">
                            {benefits.map((benefit, index) => (
                                <div
                                    className="benefit-card"
                                    key={benefit.title}
                                    style={{ transitionDelay: `${index * 0.12}s` }}
                                >
                                    <h4>{benefit.title}</h4>
                                    <p>{benefit.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;