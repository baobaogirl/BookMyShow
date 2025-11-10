import React from 'react';
import {Link} from 'react-router-dom'

function BookTicket() {

  const dates = [
    { day: "MON", date: "10 NOV", selected: true },
    { day: "TUE", date: "11 NOV" },
    { day: "WED", date: "12 NOV" },
    { day: "THU", date: "13 NOV" },
    { day: "FRI", date: "14 NOV" },
    { day: "SAT", date: "15 NOV" },
    { day: "SUN", date: "16 NOV" },
  ];

  const cinemas = [
    {
      name: "PVR: CP67 Mall, Mohali",
      timings: ["10:30 PM"],
    },
    {
      name: "PVR: Elante, Chandigarh",
      timings: ["10:45 PM"],
    },
    {
      name: "PVR: VR Punjab Mall, Mohali",
      timings: ["10:55 PM"],
    },
    {
      name: "PVR: Mohali Walk",
      timings: ["10:55 PM"],
    },
  ];

  return (
    <div className="px-[100px] pt-[40px] pb-[80px]">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-5">Movie Name - (Language)</h1>

      {/* Date selectors */}
      <div className="flex gap-3 mb-6">
        {dates.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center border rounded-lg px-5 py-2 cursor-pointer 
              ${item.selected ? "bg-[#F84464] text-white" : "text-gray-700"}`}
          >
            <p className="text-sm font-semibold">{item.day}</p>
            <p className="text-md font-bold">{item.date}</p>
          </div>
        ))}
      </div>

      <hr className="mb-6" />

      {/* Cinema listings */}
      {cinemas.map((cinema, index) => (
        <div key={index} className="border rounded-lg p-5 mb-6">
          <div className="flex justify-between items-center mb-3">
            <p className="text-lg font-semibold">{cinema.name}</p>
            <span className="text-green-600 text-sm font-medium">
              ● AVAILABLE
            </span>
          </div>


        <div className="flex flex-wrap gap-4">
          {cinema.timings.map((time, i) => (
            <Link to="/details" key={i}>
              <button
                className="border border-green-600 px-5 py-2 rounded-md 
                hover:bg-[#F84464] hover:text-white hover:border-[#F84464]
                transition cursor-pointer"
              >
                {time}
              </button>
            </Link>
          ))}
        </div>

          <p className="text-sm text-gray-600 mt-2">
            Cancellation Available
          </p>
        </div>
      ))}

    </div>
  );
}

export default BookTicket;
