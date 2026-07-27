import "./JobDescription.css";

function JobDescription() {
    return (
        <section className="job-section">

            <h2>Job Description</h2>

            <p>
                Paste the job advertisement you want to compare with your resume.
            </p>

            <textarea
                placeholder="Paste the job description here..."
            />

        </section>
    );
}

export default JobDescription;