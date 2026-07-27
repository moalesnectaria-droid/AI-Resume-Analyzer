import "./ResumeUploader.css";

function ResumeUploader() {
    return (
        <section className="upload-section">

            <h2>Upload Your Resume</h2>

            <p>
                Upload your CV and paste the job description to start the AI analysis.
            </p>

            <div className="upload-box">

                <div className="upload-icon">
                    📄
                </div>

                <h3>Drag & Drop Resume</h3>

                <p>PDF or DOCX</p>

                <button>
                    Browse File
                </button>

            </div>

        </section>
    );
}

export default ResumeUploader;