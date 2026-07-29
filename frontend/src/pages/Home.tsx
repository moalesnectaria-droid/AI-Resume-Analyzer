import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import ResumeUploader from "../components/resume/ResumeUploader";
import JobDescription from "../components/resume/JobDescription";
import AkiAssistent from "../components/resume/AkiAssistent";

import { analyzeResume } from "../services/analysis";

function Home() {
    const navigate = useNavigate();

    const [file, setFile] = useState<File | null>(null);
    const [jobDescription, setJobDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAnalyze = async () => {
        if (!file) {
            alert("Please upload your resume.");
            return;
        }

        if (!jobDescription.trim()) {
            alert("Please paste a job description.");
            return;
        }

        try {
            setLoading(true);

            const result = await analyzeResume(file, jobDescription);

            navigate("/results", {
                state: result,
            });
        } catch (error) {
            console.error(error);
            alert("Failed to analyze resume.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />

            <Hero />

            <ResumeUploader
                file={file}
                onFileSelect={setFile}
            />

            <JobDescription
                value={jobDescription}
                onChange={setJobDescription}
            />

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "40px 0",
                }}
            >
                <button
                    onClick={handleAnalyze}
                    disabled={loading}
                    style={{
                        padding: "15px 40px",
                        fontSize: "18px",
                        borderRadius: "12px",
                        cursor: "pointer",
                    }}
                >
                    {loading ? "Analyzing..." : "✨ Analyze Resume"}
                </button>
            </div>

            <AkiAssistent />
        </>
    );
}

export default Home;