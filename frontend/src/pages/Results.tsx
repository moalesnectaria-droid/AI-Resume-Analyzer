import { useLocation, Navigate } from "react-router-dom";
import ATSScore from "../components/results/ATSScore";
import type { AnalysisResult } from "../services/analysis";

function Results() {
    const location = useLocation();

    const analysis = location.state as AnalysisResult | undefined;

    if (!analysis) {
        return <Navigate to="/" replace />;
    }

    return <ATSScore analysis={analysis} />;
}

export default Results;