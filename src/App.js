import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/User/Login';
import UserRegister from './Components/User/UserRegister';
import HeaderNavbar from './Components/HeaderNavbar';
import BodyHeader from './Components/User/BodyHeader';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderNavbar />
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<UserRegister />} />
          <Route path='/' element={<BodyHeader />} />
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
