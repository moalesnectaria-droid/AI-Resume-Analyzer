import "./AkiChat.css";
import type { AnalysisResult } from "../../services/analysis";
import aki from "../../assets/aki.png";

type Props = {
  analysis: AnalysisResult;
};

function AkiChat({ analysis }: Props) {
  return (
    <section className="aki-chat">
      <div className="aki-header">
        <img src={aki} alt="Aki" className="aki-avatar" />

        <div>
          <h2>Aki Assistant</h2>
          <p>Your AI Career Coach</p>
        </div>
      </div>

      <div className="chat-message">
        <p>
          Hello! 
          <br />
          <br />
          I've analysed your resume.
          <br />
          <br />
          Your ATS score is <strong>{analysis.score}%</strong>.
          <br />
          <br />
          Here are my biggest suggestions:
        </p>

        <ul>
          {analysis.recommendations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p>
          You're already doing a great job. With these improvements your CV
          could become even stronger. 
        </p>
      </div>
    </section>
  );
}

export default AkiChat;