import "./Register.css";
function Register(){
    return(
        <div className="container"> 
        <form>
  <h1>Login to your account</h1>
  
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address/mobile number</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-success">Login</button>
  
  
  
  
</form>
</div>     
    )
}
export default Register;