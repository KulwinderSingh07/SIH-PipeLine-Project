import './App.css';
import {Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import AreaDashBoardPage from './components/areaDashBoard';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/AreaDashBoard' element={<AreaDashBoardPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
