import {Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Homepage from './Homepage.js';

function App() {
  return (
    <>
      <Header className="header"/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
      <Footer className="footer"/>
    </>
  );
}

export default App;
