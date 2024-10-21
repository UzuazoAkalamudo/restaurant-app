import {Routes, Route} from "react-router-dom";
import Homepage from '../Homepage.js';
import BookingPage from '../BookingPage.js';

function Main(){
    return(
        <main>
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/reservations" element={<BookingPage/>}></Route>
          </Routes>
        </main>
    );
};

export default Main;