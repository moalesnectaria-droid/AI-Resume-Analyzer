import "./AkiAssistent.css";
import { useNavigate } from "react-router-dom";

function AkiAssistent() {

    const navigate = useNavigate();

    return (
        <section className="aki-card">

            <div className="aki-avatar">
                
            </div>

            <h2>AKI Assistant</h2>

            <p>
                Hello! I'm your AI career assistant.
            </p>

            <div className="aki-status">

                <div className="status success">
                     Resume Ready
                </div>

                <div className="status success">
                     Job Description Ready
                </div>

                <div className="status pending">
                     Waiting for Analysis
                </div>

            </div>

            <button
                className="analyze-btn"
                onClick={() => navigate("/results")}
            >
                Analyze Resume
            </button>

        </section>
    );
}

export default AkiAssistent;