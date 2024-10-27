import {Routes, Route} from "react-router-dom";
import {useReducer} from "react";
import Homepage from '../Homepage.js';
import BookingPage from '../BookingPage.js';

function reducer(state, action){
  switch (action.type) {
    case 'initialize':
      return action.payload;
    case 'update':
      return action.payload;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export const updateTimes = (selectedDate) =>{
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  return availableTimes;
}

export const initializeTimes = () => {
  const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  return initialTimes;
}

function Main(){

    const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes)

    return(
        <main>
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} dispatch={dispatch}/>}></Route>
          </Routes>
        </main>
    );
};

export default Main;