import './App.css';
import DashBoardPage from './components/dashBoard';
import {Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/mapComponent" element={<DashBoardPage />} />
      <Route exact path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
