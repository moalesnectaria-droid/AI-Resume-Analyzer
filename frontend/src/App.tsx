import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Results from "./pages/Results";
import Background from "./components/layout/Background";

function App() {
    return (
        <>
            <Background />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </>
    );
}

export default App;