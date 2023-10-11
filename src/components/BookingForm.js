import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }
    const handlChange = (e) => {
        setDate(e);
        props.dispatch(e)
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input id='book-date' value={date} onChange={(e) => handlChange(e.target.value)} type='date' required />
                        </div>


                        {/* FOR TIME SELECTION */}
                        <div>
                            <label html="book-time">Choose Time:</label>
                            <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availavleTimes.map(availableTimes => { return <option key={availableTimes}>{availableTimes}</option> })
                                }
                            </select>
                        </div>

                        {/* FOR NUMBER OF GUESTS */}
                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)} />
                        </div>
                        {/* ocation field */}
                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)} >
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        {/* SUBMIT button */}
                        <div className='btnReceive'>
                            <input aria-label='on click' type='submit' value={"Make Your Reservation"} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;