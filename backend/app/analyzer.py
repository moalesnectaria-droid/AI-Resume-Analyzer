SKILLS = [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "SQL",
    "Git",
    "Docker",
    "AWS",
    "FastAPI",
    "Django",
    "Machine Learning",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy"
]


def extract_skills(text: str):
    found = []

    text = text.lower()

    for skill in SKILLS:
        if skill.lower() in text:
            found.append(skill)

    return found
def compare_skills(cv_text: str, job_description: str):
    cv_skills = extract_skills(cv_text)
    job_skills = extract_skills(job_description)

    matched = []
    missing = []

    for skill in job_skills:
        if skill in cv_skills:
            matched.append(skill)
        else:
            missing.append(skill)

    if len(job_skills) == 0:
        score = 0
    else:
        score = round((len(matched) / len(job_skills)) * 100)

    return {
        "score": score,
        "matched": matched,
        "missing": missing
    }