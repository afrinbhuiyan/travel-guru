import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Header from "../components/Header";

const Home = () => {
  const initialDestinations = useLoaderData();
  const [destinations, setDestinations] = useState(initialDestinations);
  const [currentDestination, setCurrentDestination] = useState(
    initialDestinations.find((dest) => dest.active) || initialDestinations[0]
  );

  const handleDestinationClick = (clickedDest) => {
    const updatedDestinations = destinations.map((dest) => ({
      ...dest,
      active: dest.title === clickedDest.title,
    }));

    setDestinations(updatedDestinations);
    setCurrentDestination(clickedDest);
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: `url(${currentDestination.image.replace(
          "/images/",
          "/images/"
        )})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 flex flex-col">
        <Header></Header>

        <div className="flex-1 flex items-center justify-between px-16">
          <div className="w-1/2 text-white">
            <h1 className="text-6xl font-extrabold mb-6">
              {currentDestination.title}
            </h1>
            <p className="mb-6 max-w-lg">{currentDestination.description}</p>
            <Link to={`/booking/${currentDestination.id}`}>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded flex items-center gap-2">
              Booking <IoIosArrowForward size={16} />
            </button>
            </Link>
          </div>

          <div className="flex gap-4">
            {destinations.map((dest, index) => (
              <div
                key={index}
                onClick={() => handleDestinationClick(dest)}
                className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 cursor-pointer relative w-60 h-96 ${
                  dest.active
                    ? "border-4 border-yellow-400 scale-105"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">
                  {dest.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button className="bg-white p-2 rounded-full shadow">
            <IoIosArrowBack />
          </button>
          <button className="bg-white p-2 rounded-full shadow">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
