import "./App.css";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contacts from "./routes/Contacts";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
