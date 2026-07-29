import "./JobDescription.css";

interface JobDescriptionProps {
    value: string;
    onChange: (value: string) => void;
}

function JobDescription({
    value,
    onChange,
}: JobDescriptionProps) {
    return (
        <section className="job-section">

            <h2>Job Description</h2>

            <p>
                Paste the job advertisement you want to compare with your resume.
            </p>

            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Paste the job description here..."
            />

        </section>
    );
}

export default JobDescription;