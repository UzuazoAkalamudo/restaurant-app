import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = ({availableTimes, updateTimes, dispatch, submitForm}) => {
    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} dispatch={dispatch} submitForm={submitForm}/>
        </div>

    );
}

export default BookingPage;