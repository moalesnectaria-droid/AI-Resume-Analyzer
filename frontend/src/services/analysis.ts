export interface AnalysisResult {
    score: number;
    matchedSkills: string[];
    missingSkills: string[];
    recommendations: string[];
}

export async function analyzeResume(): Promise<AnalysisResult> {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({

                score: 92,

                matchedSkills: [
                    "React",
                    "TypeScript",
                    "Git",
                    "REST API"
                ],

                missingSkills: [
                    "Docker",
                    "AWS",
                    "CI/CD"
                ],

                recommendations: [
                    "Add Docker experience to your Projects section.",
                    "Mention REST API development more clearly.",
                    "Include measurable achievements.",
                    "Add CI/CD tools such as GitHub Actions.",
                    "Mention cloud technologies like AWS."
                ]

            });

        }, 1200);

    });

}