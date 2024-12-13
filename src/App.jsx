

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import OurWork from './pages/OurWork'
import GetInvolved from "./pages/GetInvolved";
import AboutUs from "./pages/AboutUs";
import Header from './components/common/Header'
import Footer from "./components/common/Footer";
import Donate from "./pages/Donate";
function App() {
 

  return (
    <div >
      
      <Router>
      <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourwork" element={<OurWork/>} />
        <Route path="/getinvolved" element={<GetInvolved/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/donate" element={<Donate/>} />
      </Routes>
   
      <Footer />
    </Router>
    
    </div>
  )
}

export default App
