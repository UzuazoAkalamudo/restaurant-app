import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';
import { BrowserRouter, MemoryRouter } from "react-router-dom";

test('Renders the BookingForm heading', () => {
    const mockAvailableTimes = ["17:00", "18:00", "19:00"];
    const mockUpdateTimes = jest.fn();
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();

    render(<MemoryRouter>
            <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} dispatch={mockDispatch} submitForm={mockSubmitForm}/>
        </MemoryRouter>);

    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Validate HTML date validation', () => {

    const mockAvailableTimes = ["17:00", "18:00", "19:00"];
    const mockUpdateTimes = jest.fn();
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();

    render(<MemoryRouter>
        <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} dispatch={mockDispatch} submitForm={mockSubmitForm}/>
    </MemoryRouter>);

    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');
});

test('Validate HTML date validation, time', () => {

    const mockAvailableTimes = ["17:00", "18:00", "19:00"];
    const mockUpdateTimes = jest.fn();
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();

    render(<MemoryRouter>
        <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} dispatch={mockDispatch} submitForm={mockSubmitForm}/>
    </MemoryRouter>);

    const timeInput = screen.getByLabelText("Choose time");
    expect(timeInput).toBeInTheDocument();
    expect(timeInput).toHaveAttribute('required');
});

test('Validate HTML date validation, guests', () => {

    const mockAvailableTimes = ["17:00", "18:00", "19:00"];
    const mockUpdateTimes = jest.fn();
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();

    render(<MemoryRouter>
        <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} dispatch={mockDispatch} submitForm={mockSubmitForm}/>
    </MemoryRouter>);

    const guestInput = screen.getByLabelText("Number of guests");
    expect(guestInput).toBeInTheDocument();
    expect(guestInput).toHaveAttribute('type', 'number');
    expect(guestInput).toHaveAttribute('required');
});

test('Validate HTML date validation, occasion', () => {

    const mockAvailableTimes = ["17:00", "18:00", "19:00"];
    const mockUpdateTimes = jest.fn();
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();

    render(<MemoryRouter>
        <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} dispatch={mockDispatch} submitForm={mockSubmitForm}/>
    </MemoryRouter>);

    const occasionInput = screen.getByLabelText("Occasion");
    expect(occasionInput).toBeInTheDocument();
    expect(occasionInput).toHaveAttribute('required');
});


test('Submit button should be disabled for non-empty values', () => {

    const mockAvailableTimes = ["17:00", "18:00", "19:00"];
    const mockUpdateTimes = jest.fn();
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();

    render(<MemoryRouter>
        <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} dispatch={mockDispatch} submitForm={mockSubmitForm}/>
    </MemoryRouter>);

    fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: 1 } });
    fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: '' } });

    const submitInput = screen.getByLabelText("Submit Booking");
    expect(submitInput).toBeDisabled();

  });

  test('Submit button should not be disabled for valid values', () => {

    const mockAvailableTimes = ["17:00", "18:00", "19:00"];
    const mockUpdateTimes = jest.fn();
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();

    render(<MemoryRouter>
        <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} dispatch={mockDispatch} submitForm={mockSubmitForm}/>
    </MemoryRouter>);

    fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: '2024-08-30' } });
    fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: 2 } });
    fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: 'Birthday' } });

    const submitInput = screen.getByLabelText("Submit Booking");
    expect(submitInput).not.toBeDisabled();

  });