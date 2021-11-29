import "./Option.css";
 function Option() {
    return(
        <div className="container">
            <div className="alert alert-primary" role="alert">
                <a href="register">Hospital</a>
  
</div>
<div className="alert alert-secondary" role="alert">
    <a href="register">Patient</a>
  </div>
<div className="alert alert-success" role="alert">
    <a href="register">Doctor</a>
  
</div>
           
        </div>
    )
}
export default Option;