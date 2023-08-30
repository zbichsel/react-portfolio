import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path="/" element={<About></About>}></Route>
      <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/resume" element={<Resume></Resume>}></Route>



      </Routes>
      
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
