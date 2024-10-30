import "./BookingForm.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const BookingForm = ({availableTimes, updateTimes, dispatch, submitForm}) => {

    const navigate = useNavigate();

    const handleDateChange = (event) => {
        setDate(event.target.value);
        const selectedDate = new Date(event.target.value);
        const updatedTimes = updateTimes(selectedDate)
        dispatch({type: 'update', payload: updatedTimes})
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            date,
            time,
            guests,
            occasion,
        };
        if (submitForm(formData)){
            navigate("/booking-confirmed");
        }

    };

    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState("No Occasion");

    const getIsFormValid = () => {
        return (
            date &&
            time &&
            guests >= 2 &&
            occasion
          );
        }

    return(
        <form className="booking-form" onSubmit={handleSubmit}>
            <h1>Book Now</h1>
            <label htmlFor="res-date">Choose date</label>
            <input aria-label="On Click" type="date" value={date} onChange={handleDateChange} id="res-date" required/>

            <label htmlFor="res-time">Choose time</label>
            <select aria-label="On Click" id="res-time" value={time} onChange={e => setTime(e.target.value)} required>
                {availableTimes.map(time => <option>{time}</option>)}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input aria-label="On Click" type="number" value={guests} onChange={e => setGuests(e.target.value)} min="1" max="10" id="guests" required/>

            <label htmlFor="occasion">Occasion</label>
            <select  aria-label="On Click" id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} required>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>No Occasion</option>
            </select>

            <input type="submit" aria-label="Submit Booking" value="Make Your Reservation" disabled={!getIsFormValid()} />
        </form>
        )
}

export default BookingForm;