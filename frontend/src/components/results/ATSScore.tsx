import { useEffect, useState } from "react";
import { analyzeResume } from "../../services/analysis";
import type { AnalysisResult } from "../../services/analysis";
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import AkiChat from "./AkiChat";
function ATSScore() {

    const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

    useEffect(() => {

        analyzeResume().then((result) => {
            setAnalysis(result);
        });

    }, []);

    if (!analysis) {
        return (
            <section className="ats">
                <h2>ATS Compatibility Score</h2>
                <p>Analyzing...</p>
            </section>
        );
    }

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

            textSize: "18px"

        })}

    />

</div>

            <p>
                Excellent! Your resume is highly compatible with this job.
            </p>

            <div className="skills-container">

                <div className="skills-box">

                    <h3> Matched Skills</h3>

                    <ul>
                        {analysis.matchedSkills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>

                </div>

                <div className="skills-box">

                    <h3> Missing Skills</h3>

                    <ul>
                        {analysis.missingSkills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>

                </div>

            </div>
            <div className="recommendations">

    <h3> AI Recommendations</h3>

    <ul>

        {analysis.recommendations.map((item) => (

            <li key={item}>
                {item}
            </li>

        ))}

    </ul>

</div>
<AkiChat analysis={analysis} />

        </section>
        
    );
}

export default ATSScore;