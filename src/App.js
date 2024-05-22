import "./App.css";
import MultiStepForm from "./components/multi-step-form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppContainer } from "./styled";
import ThankYouPage from "./components/thank-page";

function App() {
  return (
    <Router>
      <AppContainer className="App">
        <Routes>
          <Route path="/" element={<MultiStepForm />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
