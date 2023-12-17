import './App.css';
import {Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import AreaDashBoardPage from './components/areaDashBoard';
import LoginSingupCompoent from './components/authCompoent';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/AreaDashBoard' element={<AreaDashBoardPage/>}/>
      {/* <Route exact path='/authUser' element={<LoginSingupCompoent/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
