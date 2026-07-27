import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import ResumeUploader from "../components/resume/ResumeUploader";
import JobDescription from "../components/resume/JobDescription";
import AkiAssistent from "../components/resume/AkiAssistent";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <ResumeUploader />
            <JobDescription />
            <AkiAssistent />
        </>
    );
}

export default Home;