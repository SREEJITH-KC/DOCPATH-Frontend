import "./header.css"
import patp from './Docpathp.jpg'
import docd from './Docpathd.jpg'
import hosh from './Docpathh.jpg'
import Navbar from '../../components/navbar/Navbar';
function Header(){
    return(
        <div className="container-fluid">
            <Navbar />
            <div className="row" id="row3">
                
                <div className="col">
                    <img className="img-fluid w-55 " src="Docpath.jpeg" alt="" />
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
    )
}
export default Header;