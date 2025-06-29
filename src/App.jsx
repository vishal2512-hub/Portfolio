
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Resume from './component/Resume';
import Achivements from './component/Achivements/Achivements';
import Projects from './component/Projects';

function App() {
  return (
    <div className="App">
     <Router basename='/Portfolio'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/Archieve" element={<Achivements />} />
        <Route path="/Project" element={<Projects />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
