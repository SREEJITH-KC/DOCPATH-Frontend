import Footer from "../../pages/footer/Footer";
import Navbar from "../navbar/Navbar";
import "./header.css"
import patp from './Docpathp.jpg'
import docd from './Docpathd.jpg'
import hosh from './Docpathh.jpg'

function Header(){
    return(
        <>
        <Navbar />
        <div className="container-fluid">
            
            <div className="row" id="row3">
                
                <div className="col">
                    <img className="img-fluid w-30 " src="Docpath.jpeg" alt="" />
                </div>
                <div className="col">
                    <div className="column">
                    <a href="/login">
                   <img src={hosh} class="test rounded-circle" alt="Cinque Terre"></img>
                   </a>
                   <a href="/login">
                   <img src={docd} class="test rounded-circle" alt="Cinque Terre"></img>
                   </a>
                   <a href="/login">
                   <img src={patp} class="test rounded-circle" alt="Cinque Terre"></img>
                   </a>
                    </div>
                    
                </div>
            </div>
            
        </div>
        <Footer />
        </>
    )
}
export default Header;