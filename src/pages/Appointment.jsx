import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [docInfo, setDocInfo] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const fetchDocInfo = () => {
    if (doctors && doctors.length > 0) {
      const docInfo = doctors.find((doc) => doc._id === docId);
      setDocInfo(docInfo || null);
    }
  };

  const getAvailableDates = () => {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7); 

    const dates = [];
    while (today <= nextWeek) {
      const dayOfWeek = daysOfWeek[today.getDay()]; 
      dates.push({ date: new Date(today), dayOfWeek });
      today.setDate(today.getDate() + 1);
    }
    setAvailableDates(dates);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Clear selected time when date changes
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableDates(); 
    }
  }, [docInfo]);

  if (!docInfo) {
    return <p>Loading doctor details...</p>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg"
            src={docInfo?.image || 'path/to/default/image.jpg'} 
            alt={docInfo?.name || 'Doctor'} 
          /> 
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo?.name || 'Dr. Unknown'} <img src={assets.verified_icon} alt="" />
          </p>
          <div>
            <p className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              {docInfo?.degree || 'N/A'}-{docInfo?.speciality || 'N/A'}{" "}
              <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo?.experience || 'N/A'}</button>
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo?.about || 'No information available.'}</p>
          </div>
          <p className="text-gray-500 font-medium mt-4">
            Appointment fee: <span className="text-gray-600">{currencySymbol || '₹'}{docInfo?.fees || 0}</span>
          </p>
        </div>
      </div>

      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Available Dates</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {availableDates.map((date) => (
            <div 
              key={date.date.getTime()}
              className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                selectedDate && selectedDate.getTime() === date.date.getTime()
                  ? 'bg-primary text-white'
                  : 'border border-gray'
                }`}
              onClick={() => handleDateSelect(date.date)}
            >
              <p>{date.dayOfWeek}</p>
              <p>{date.date.getDate()}</p>
            </div>
          ))}
        </div>

        {selectedDate && (
          <div className="mt-4">
            <p>Select Time</p>
            <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
              {Array.from({ length: 17 }, (_, i) => i + 6).map((hour) => ( 
                <div
                  key={hour}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    selectedTime === hour ? 'bg-primary text-white' : 'border border-gray'
                  }`}
                  onClick={() => setSelectedTime(hour)}
                >
                  <p>{hour}:00</p> 
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedDate && selectedTime && (
          <div className="mt-4">
            <p>Selected Date and Time:</p>
            <p>{daysOfWeek[selectedDate.getDay()]}, {selectedDate.getDate()} at {selectedTime}:00</p>
            {/* Add further logic for booking the appointment here */}
          </div>
        )}
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>
      </div>
      {/* -----listing relaed doctors---- */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
  );
};

export default Appointment;