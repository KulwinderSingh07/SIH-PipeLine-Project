import './App.css';
import {Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import AreaDashBoardPage from './components/areaDashBoard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Alerts from './components/Alerts';

import LineChartComponent from './components/lineChart';
import LineChart from './components/temp';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/alerts' element={<Alerts/>}/>
      <Route exact path='/AreaDashBoard' element={<AreaDashBoardPage/>}/>
      <Route exact path='/auth/login' element={<Login/>}/>
      <Route exact path='/auth/register' element={<Register/>}/>
  
      {/* <Route exact path='/lineChart' element={<LineChart/>}/> */}
      </Routes>
      
    </div>
  );
}

export default App;
