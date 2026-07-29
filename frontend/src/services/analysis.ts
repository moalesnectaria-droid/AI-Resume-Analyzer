export interface AnalysisResult {
  filename: string;
  pages: number;
  score: number;
  matched: string[];
  missing: string[];
}

export async function analyzeResume(
  file: File,
  jobDescription: string
): Promise<AnalysisResult> {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("job_description", jobDescription);

  const response = await fetch("http://127.0.0.1:8000/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to analyze resume.");
  }

  const data: AnalysisResult = await response.json();

  return data;
}