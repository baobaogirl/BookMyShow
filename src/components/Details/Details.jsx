import React, { useState } from "react";

function Details() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [seatType, setSeatType] = useState("classic");
  const [seats, setSeats] = useState(1);

  const seatPrices = {
    classic: 180,
    recliner: 500,
  };

  const totalPrice = seats * seatPrices[seatType];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Successful ✅
Name: ${name}
Age: ${age}
Seat Type: ${seatType}
Seats: ${seats}
Total Price: ₹${totalPrice}`);
  };

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center text-[#F84464]">
          Enter Booking Details
        </h2>

        {/* Name */}
        <label className="block mb-2 font-medium">Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Age */}
        <label className="block mb-2 font-medium">Age</label>
        <input
          type="number"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        {/* Seat Type Dropdown */}
        <label className="block mb-2 font-medium">Seat Type</label>
        <select
          className="w-full p-2 border rounded mb-4"
          value={seatType}
          onChange={(e) => setSeatType(e.target.value)}
        >
          <option value="classic">Classic – ₹180</option>
          <option value="recliner">Recliner – ₹500</option>
        </select>

        {/* Number of Seats */}
        <label className="block mb-2 font-medium">Number of Seats</label>
        <input
          type="number"
          className="w-full p-2 border rounded mb-4"
          min={1}
          value={seats}
          onChange={(e) => setSeats(Number(e.target.value))}
          required
        />

        {/* Total Price */}
        <p className="text-lg font-semibold mb-4">
          Total Price: ₹{totalPrice}
        </p>

        <button
          type="submit"
          className="w-full bg-[#F84464] hover:bg-[#d73752] text-white font-semibold py-2 rounded"
        >
          Proceed Booking
        </button>
      </form>
    </div>
  );
}

export default Details;
