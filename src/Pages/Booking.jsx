import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
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

  console.log(destination);
  console.log(initialDestinations.find((des) => des.id === id));

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${destination.image})`,
      }}
    >
      <div className="absolute inset-0 flex flex-col overflow-y-auto">
        <Header />

        <div className="flex-grow flex items-center justify-center p-4 md:p-8">
          <div className="booking-container max-w-4xl w-full bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 text-white border border-white/20 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {destination.title}
            </h2>

            <p className="text-lg mb-6 leading-relaxed">
              {destination.description}
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Attractions:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {destination.attractions?.map((attraction, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    {attraction}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-6 text-lg">
              <div>
                <span className="font-semibold">Best time to visit:</span>{" "}
                {destination.bestTimeToVisit}
              </div>
              <div>
                <span className="font-semibold">Rating:</span>{" "}
                {destination.rating}/5
              </div>
            </div>

            <button className="mt-8 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
