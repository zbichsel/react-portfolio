import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Resume from './pages/Resume';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
