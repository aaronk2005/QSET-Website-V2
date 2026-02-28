import './App.css';
import Menu_bar from './Menu_bar';
import Home from './Home';  
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<>
          <Menu_bar className="navbar"/>
          <Home />
        </>} />
        <Route path="/rover" element={<><Menu_bar className="navbar"/></>}></Route>
        <Route path="/satellite" element={<><Menu_bar className="navbar"/></>}></Route>
        <Route path="/exec" element={<><Menu_bar className="navbar"/></>}></Route>
        <Route path="/sponsors" element={<><Menu_bar className="navbar"/></>}></Route>
      </Routes>
    </div>
 
  );
}

export default App;
