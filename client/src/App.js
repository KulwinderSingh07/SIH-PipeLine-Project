import './App.css';
import DashBoardPage from './components/dashBoard';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/mapComponent" element={<DashBoardPage />} />
      </Routes>
    </div>
  );
}

export default App;
