import './App.css';
import MenuBar from './MenuBar';
import Footer from './Footer';
import Home from './Home';
import Exec from './Exec';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<>
          <title>QSET Home</title>
          <MenuBar className="navbar"/>
          <Home />
          <Footer/>
        </>} />

        <Route path="/rover" element={<><title>QSET Rover</title><MenuBar className="navbar"/></>}></Route>
        <Route path="/satellite" element={<><title>QSET Satellite</title><MenuBar className="navbar"/></>}></Route>
        <Route path="/exec" element={<><title>QSET Exec</title><MenuBar className="navbar"/><Exec /></>}></Route>
        <Route path="/sponsors" element={<><title>QSET Sponsors</title><MenuBar className="navbar"/></>}></Route>
      </Routes>
    </div>
 
  );
}

export default App;
