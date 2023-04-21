import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Otp from './pages/Otp';
import Otpmobile from './pages/Otpmobile';
import Error from './pages/Error';
import Headers from './components/Headers';
import Loginotp from './pages/Loginotp';
import Past from './pages/Past';
import {Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Predict from "./pages/Predict";


function App() {
  return (
    <>
    <Headers/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/user/otp' element={<Otp/>}/>
      <Route path='/user/otpmobile' element={<Otpmobile/>}/>
      <Route path='/user/loginotp' element={<Loginotp/>}/>
      <Route path='/user/past' element={<Past/>}/>
        <Route path="/predict" element={<Predict />} />
      <Route path='*' element={<Error/>}/>
      
    </Routes>
    </>
  );
}

export default App;
