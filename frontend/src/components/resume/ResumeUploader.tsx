import "./ResumeUploader.css";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface ResumeUploaderProps {
    file: File | null;
    onFileSelect: (file: File) => void;
}

function ResumeUploader({
    file,
    onFileSelect,
}: ResumeUploaderProps) {

    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            if (acceptedFiles.length > 0) {
                onFileSelect(acceptedFiles[0]);
            }
        },
        [onFileSelect]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "application/pdf": [".pdf"],
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
        },
        multiple: false,
    });

    return (
        <section className="resume-section">

            <h2>Upload Your Resume</h2>

            <p>
                Upload your CV and paste the job description to start the AI
                analysis.
            </p>

            <div {...getRootProps()} className="upload-box">

                <input {...getInputProps()} />

                {isDragActive ? (
                    <h3>Drop your resume here...</h3>
                ) : (
                    <>
                        <div className="file-icon">📄</div>

                        <h3>Drag & Drop Resume</h3>

                        <span>PDF or DOCX</span>

                        <button type="button">
                            Browse File
                        </button>

                        {file && (
                            <div className="uploaded-file">
                                ✅ {file.name}
                            </div>
                        )}
                    </>
                )}

            </div>

        </section>
    );
}

export default ResumeUploader;