import React, { useState, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { SlLocationPin } from "react-icons/sl";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdCalendarToday } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Header from "../components/Header";

const Booking = () => {
  const { id } = useParams();
  const initialDestinations = useLoaderData();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    const foundDestination = initialDestinations.find((des) => des.id === id);
    setDestination(foundDestination);
  }, [id, initialDestinations]);

  if (!destination) {
    return <div>Loading or destination not found...</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    const origin = e.target.origin.value;
    const destination = e.target.destination.value;
    const from = e.target.from.value;
    const to = e.target.to.value;
    console.log({origin, destination, from, to})
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${destination.image})`,
      }}
    >
      <div className="absolute inset-0 flex flex-col">
        <Header />

        <div className="flex-1 items-center justify-center px-4 lg:px-40">
          <div className="w-full h-full flex flex-row text-white items-center justify-between">
            {/* Destination Info */}
            <div className="mb-12">
              <h1 className="text-8xl bebas-neue font-bold mb-4">
                {destination.title}
              </h1>
              <p className="text-lg max-w-2xl">{destination.description}</p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-6 max-w-2xl mx-auto p-6 lg:p-14 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="block text-sm font-medium text-white/80 mb-1 transition-all duration-300 group-focus-within:text-[#F9A51A]">
                      Origin
                    </label>
                    <div className="relative">
                      <input
                        name="origin"
                        className="w-full p-3 pl-10 bg-white/90 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#F9A51A] focus:border-transparent transition-all duration-300 shadow-sm"
                        placeholder="Where from?"
                        required
                      />
                      <SlLocationPin className="absolute left-3 top-1/2 -translate-y-1/2  h-5 w-5  text-gray-500" />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-medium text-white/80 mb-1">
                      Destination
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="destination"
                        readOnly
                        className="w-full p-3 pl-10 bg-white/70 rounded-lg text-gray-800 cursor-not-allowed border-l-4 border-[#F9A51A]"
                        value={destination?.title} 
                      />
                      <IoBriefcaseOutline
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-600"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-medium text-white/80 mb-1 transition-all duration-300 group-focus-within:text-[#F9A51A]">
                      From
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="from"
                        className="w-full p-3 pl-10 bg-white/90 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#F9A51A] focus:border-transparent transition-all duration-300 shadow-sm appearance-none"
                        required
                      />
                      <MdCalendarToday
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-medium text-white/80 mb-1 transition-all duration-300 group-focus-within:text-[#F9A51A]">
                      To
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="to"
                        className="w-full p-3 pl-10 bg-white/90 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#F9A51A] focus:border-transparent transition-all duration-300 shadow-sm appearance-none"
                        required
                      />
                      <MdCalendarToday
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link to={`/accommodations/${destination.id}`}>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-[#F9A51A] to-[#FF7A00] rounded-lg font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-2"
                  >
                    <span>Start Booking</span>
                    <FaArrowRightLong></FaArrowRightLong>
                  </button>
                  </Link>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
