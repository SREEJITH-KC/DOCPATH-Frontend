import './App.css';
import Doclogo from './assets/DOCPATH.png';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
      <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={Doclogo} alt=""/>
        </div>
        <div className="col-md-5">
          <Signup />
        </div>
       
      </div>
    </div>
  );
}

export default App;
