import {Routes, Route} from "react-router-dom";
import {useReducer} from "react";
import Homepage from '../Homepage/Homepage.js';
import BookingPage from '../Booking/BookingPage.js';
import ConfirmedBooking from '../Booking/ConfirmedBooking.js';
import { fetchAPI, submitAPI } from '../../api.js';

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
  return fetchAPI(selectedDate);
}

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
}

export const submitForm = (formData) => {

  return submitAPI(formData)
}

function Main(){

    const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes)

    return(
        <main>
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} dispatch={dispatch} submitForm={submitForm}/>}></Route>
            <Route path="/booking-confirmed" element={<ConfirmedBooking/>}></Route>
          </Routes>
        </main>
    );
};

export default Main;