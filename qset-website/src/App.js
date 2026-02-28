import './App.css';
import MenuBar from './MenuBar';
import Home from './Home';  
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<>
          <MenuBar className="navbar"/>
          <Home />
        </>} />
        <Route path="/rover" element={<><MenuBar className="navbar"/></>}></Route>
        <Route path="/satellite" element={<><MenuBar className="navbar"/></>}></Route>
        <Route path="/exec" element={<><MenuBar className="navbar"/></>}></Route>
        <Route path="/sponsors" element={<><MenuBar className="navbar"/></>}></Route>
      </Routes>
    </div>
 
  );
}

export default App;
