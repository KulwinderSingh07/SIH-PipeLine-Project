import './App.css';
import {Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import AreaDashBoardPage from './components/areaDashBoard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/AreaDashBoard' element={<AreaDashBoardPage/>}/>
      <Route exact path='/auth/login' element={<Login/>}/>
      <Route exact path='/auth/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
