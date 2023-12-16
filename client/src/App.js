import './App.css';
import DashBoardPage from './components/dashBoard';
import {Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import LineChartComponent from './components/lineChart';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/mapComponent" element={<DashBoardPage />} />
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/linechart' element={<LineChartComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
