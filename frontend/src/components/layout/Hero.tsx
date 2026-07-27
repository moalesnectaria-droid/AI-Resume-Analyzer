import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-left">

                <span className="badge">
                    AI Powered Resume Analysis
                </span>

                <h1>
                    Land More Interviews
                    <br />
                    with AI
                </h1>

                <p>
                    Upload your resume, compare it with any job description,
                    discover missing skills and receive intelligent
                    recommendations in seconds.
                </p>

                <div className="hero-buttons">

                    <button className="primary">
                        Upload Resume
                    </button>

                    <button className="secondary">
                        Learn More
                    </button>

                </div>

            </div>

            <div className="hero-right">

                <div className="akita-placeholder">

                    AKI

                </div>

            </div>

        </section>
    );
}

export default Hero;