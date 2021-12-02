 
import { BrowserRouter as Router,Route, Navigate,Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Option from "./pages/login-Option/Option";
import Register from "./pages/register/Register";
import About from "./components/about/About";
import Doctorsignup from "./components/Doctorsignup/Doctorsignup";
import Patientsignup from "./components/Patientsignup/Patientsignup";

function App() {
  return(
  

    <Router>
    
    <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/register" element={<Register />} /> */}
    <Route path="/option" element={<Option/>}/> 
    <Route path="/login" element={<Login/>} /> 
    <Route path="/register" element={<Register />} /> 
    <Route path="/about" element={<About/>}/> 
    <Route path="/Doctorsignup" element={<Doctorsignup/>}/> 
    <Route path="/Patientsignup" element={<Patientsignup/>}/> 
    
    
    </Routes>
    </Router>

  );
}

export default App;
