import './App.css';
import DashBoardPage from './components/dashBoard';
import MapComponent from './components/map';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Map from './components/newmap';

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<DashBoardPage />} />
      <Route exact path="/tempmap" element={<Map />} />
      </Routes>
    {/* <MapComponent/> */}
    </div>
    // </BrowserRouter>
  );
}

export default App;
