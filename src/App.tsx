import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RandomAyat from "./modules/random-ayat/RandomAyat";
import AyatAudio from "./modules/audio/AyatAudio";
import Nav from "./shared/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<RandomAyat />} />
        <Route path="/ayat-audio" element={<AyatAudio />} />
      </Routes>
    </Router>
  );
}

export default App;
