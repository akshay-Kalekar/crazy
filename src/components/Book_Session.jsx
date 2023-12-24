import React from 'react';

function Book_Session() {
  return (
    <div className="rounded-lg shadow-lg bg-white p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">1:1 Session Booking</h2>
          <p className="text-sm text-gray-500">Book a one-on-one session with our expert.</p>
        </div>
        <span className="text-sm bg-green-solid px-2 py-1 rounded">$200 / session</span>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <CalendarIcon className="w-5 h-5 text-gray-500" />
          <p className="text-sm text-gray-500">Date: December 30, 2023</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <a href="#" className="text-blue-500 hover:text-blue-700">
          View More Sessions
        </a>
        <button className="text-white bg-blue-solid px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500">
          Book Now
        </button>
      </div>
    </div>
  );
}



export default Book_Session;
