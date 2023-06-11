
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './Components/User/Login';
import UserRegister from './Components/User/UserRegister';
import HeaderNavbar from './Components/HeaderNavbar';

function App() {
  return (
    <div className="App">
      < HeaderNavbar />

      <Router>

        <Routes>
          <Route path="/login" Component={Login} />
          <Route path='/register' Component={UserRegister} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
