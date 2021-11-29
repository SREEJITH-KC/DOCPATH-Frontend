// import { Link } from "react-router-dom";
// import "./Login.css";

export default function Login() {
   return (
//     <div classNameName="login">
//       <div classNameName="container">
//         <div classNameName="left">
//           <img src="" alt="" />
//         </div>
//         <div classNameName="right">
          
//         </div>
//       </div>
//       <span classNameName="loginTitle">Login</span>
//       <form classNameName="loginForm" >
//         <label>Username</label>
//         <input
//           type="text"
//           classNameName="loginInput"
//           placeholder="Enter your username..."
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           classNameName="loginInput"
//           placeholder="Enter your password..."
//         />
//         <button classNameName="loginButton" type="submit" >
//           Login
//         </button>
//       </form>
//       <button classNameName="loginRegisterButton">
//         <Link classNameName="link" >
//           Register
//         </Link>
//       </button>
//     </div>
<form>
  <div className="container"><h1>Login to your account</h1>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address/mobile number</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Signin</button>
  <a href=""><h6>forgot-password</h6></a>
  <h5> Need an account ? <a href="/register">sign-up</a> </h5>
  </div>
  
</form>
  );
}
