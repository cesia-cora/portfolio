import './App.css';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { LandingPage } from './main/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <header>
      <Nav/>
    </header>

      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
      </Routes>

      <footer>
        <Footer/>
      </footer>
    </BrowserRouter>
  )
}

export default App
