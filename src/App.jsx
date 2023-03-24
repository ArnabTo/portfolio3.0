import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Nav from "./component/Nav";
import Home from "./component/Home";
import About from "./component/About";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Skill from "./component/Skill";
import Error from "./component/Error";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./CustomCursor";
function App() {

  return (
    <BrowserRouter>
      <div className="App">     
   <Nav/>
   <AnimatePresence>
      <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/skill" element={<Skill/>} />
                <Route exact path="/project" element={<Project />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route  path="*" element={<Error />} />
      </Routes>
      </AnimatePresence>
     <CustomCursor/>
      </div>
    </BrowserRouter>
  )
}
export default App
