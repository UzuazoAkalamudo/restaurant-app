import React from "react";
import BookingForm from "./components/BookingForm";

const BookingPage = ({availableTimes, updateTimes, dispatch}) => {
    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} dispatch={dispatch}/>
        </div>
    );
}

export default BookingPage;