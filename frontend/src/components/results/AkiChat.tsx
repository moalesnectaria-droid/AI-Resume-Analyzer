import "./ATSScore.css";

import {
    CircularProgressbar,
    buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

import type { AnalysisResult } from "../../services/analysis";

interface ATSScoreProps {
    analysis: AnalysisResult;
}

function ATSScore({ analysis }: ATSScoreProps) {
    return (
        <section className="ats">

            <h2>ATS Compatibility Score</h2>

            <div className="circle">
                <CircularProgressbar
                    value={analysis.score}
                    text={`${analysis.score}%`}
                    styles={buildStyles({
                        pathColor: "#4f8dfd",
                        trailColor: "#edf2ff",
                        textColor: "#222",
                        textSize: "18px",
                    })}
                />
            </div>

            <p>
                Resume: <strong>{analysis.filename}</strong>
            </p>

            <p>
                Pages: <strong>{analysis.pages}</strong>
            </p>

            <div className="skills-container">

                <div className="skills-box">

                    <h3>✅ Matched Skills</h3>

                    <ul>
                        {analysis.matched.length === 0 ? (
                            <li>No matched skills found.</li>
                        ) : (
                            analysis.matched.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))
                        )}
                    </ul>

                </div>

                <div className="skills-box">

                    <h3>❌ Missing Skills</h3>

                    <ul>
                        {analysis.missing.length === 0 ? (
                            <li>No missing skills.</li>
                        ) : (
                            analysis.missing.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))
                        )}
                    </ul>

                </div>

            </div>

        </section>
    );
}

export default ATSScore;