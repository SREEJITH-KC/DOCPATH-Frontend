import Footer from "../../pages/footer/Footer";
import Navbar from "../navbar/Navbar";
import "./header.css"
function Header(){
    return(
        <>
        <Navbar />
        <div className="container-fluid">
             
             
            <div className="row" id="row3">
                
                <div className="col">
                    <img src="Docpath.jpeg" alt="" />
                </div>
                <div className="col">
                    <div className="row">
                    <div className="test rounded-circle"><a href="/login"><h4>Doctor</h4></a></div>
                    <div className="test rounded-circle"><a href="/login"><h4>Hospital</h4></a></div>
                    <div className="test rounded-circle"><a href="/login"><h4>Patient</h4></a></div>

                    </div>
                    
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default Header;