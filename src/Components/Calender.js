import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from '../Components/Navbar'


const Calender = () => {
  const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});
const events = [
  {
      title: "Big Meeting",
      allDay: true,
      start: new Date(2022, 6, 0),
      end: new Date(2022, 6, 0),
  },
  {
      title: "Vacation",
      start: new Date(2022, 6, 7),
      end: new Date(2022, 6, 10),
  },
  {
      title: "Conference",
      start: new Date(2022, 6, 20),
      end: new Date(2022, 6, 23),
  },
];

const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "", desc: ""  });
const [allEvents, setAllEvents] = useState(events);

function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
}
function handleDelEvent(){
  setAllEvents({ title: "", start: "", end: ""});
  window.location.reload();
}
  return (
    <>
    <Navbar/>
    <div className="container">
    <h1 className="App text-center my-4">Calendar</h1>
      <div className="row text-center my-4">
      <div className="col-md-2">
      <h4>Add Event</h4>
      </div>
     
      
        <div className="col-md-2 mx-1">
        
        <input type="text" placeholder="Add Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
        </div>
        
        <div className="col-md-2 mx-1">
        <DatePicker placeholderText="Start Date" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
  
        </div>
        <div className="col-md-2 mx-2">
        <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />

        </div>
        <div className="col-md-1 ">
        <button type="button" style={{ background: " #0e1c36", color:"white" }} className="btn btn-light btn-sm" onClick={handleAddEvent}>
            Add 
        </button>
        
        </div>
        <div className="col-md-1">
        <button type="button" style={{ background: " #0e1c36", color:"white" }} className="btn btn-light btn-sm" onClick={handleDelEvent}>
            Delete 
        </button>
        </div>
      </div>
      

  
    </div>
    <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
    </>
   
  )
}

export default Calender