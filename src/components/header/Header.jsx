import "./header.css"
function Header(){
    return(
        <div className="container-fluid">
            <ul class="nav justify-content-end"> 
                
                <li class="nav-item"> 
                    <a class="nav-link" href="/about">
                        <h3>Contact-us</h3>
                    </a> 
                </li>
             </ul> 
             
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
    )
}
export default Header;