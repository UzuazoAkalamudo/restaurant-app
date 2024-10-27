import "./BookingForm.css"
import {useState} from "react";

const BookingForm = ({availableTimes, updateTimes, dispatch}) => {

    const handleDateChange = (event) => {
        setDate(event.target.value);
        const updatedTimes = updateTimes(event.target.value)
        dispatch({type: 'update', payload: updatedTimes})
      };

    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState("No Occasion");

    return(
        <form className="booking-form">
            <h1>Book Now</h1>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" value={date} onChange={handleDateChange} id="res-date" />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                {availableTimes.map(time => <option>{time}</option>)}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" value={guests} onChange={e => setGuests(e.target.value)} min="1" max="10" id="guests" />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>No Occasion</option>
            </select>

            <input type="submit" value="Make Your Reservation" />
        </form>
        )
}

export default BookingForm;