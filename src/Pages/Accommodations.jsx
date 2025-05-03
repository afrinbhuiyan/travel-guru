import React, { useEffect, useState } from "react";
import { FaSwimmingPool } from "react-icons/fa";
import { FaSnowflake, FaStar, FaUtensils, FaWifi } from "react-icons/fa6";
import { MdBathtub, MdBedroomParent, MdCancel } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import Navbar from "../components/Navbar";
import map from "../assets/image 1.png";
import { motion } from "framer-motion";

const Accommodations = () => {
  const { id } = useParams();
  const initialDestinations = useLoaderData();
  const [destination, setDestination] = useState(null);
  const [accommodations, setAccommodations] = useState(null);

  useEffect(() => {
    const foundDestination = initialDestinations.find((des) => des.id === id);
    setAccommodations(foundDestination?.accommodations);
    setDestination(foundDestination);
  }, [id, initialDestinations]);

  if (!accommodations || !destination) {
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="rounded-full h-32 w-32 border-t-2 border-b-2 border-[#F9A51A]"
        ></motion.div>
      </div>
    );
  }

  const amenityIcons = {
    WiFi: <FaWifi className="text-blue-500" />,
    "Air conditioning": <FaSnowflake className="text-blue-400" />,
    Kitchen: <FaUtensils className="text-green-500" />,
    "Shared pool": <FaSwimmingPool className="text-teal-500" />,
    Bath: <MdBathtub className="text-purple-500" />,
    Bedroom: <MdBedroomParent className="text-amber-500" />,
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-gray-600 mb-1">252 stays Apr 13-17 • 3 guests</p>
          <h1 className="text-3xl font-bold">
            Stay in <span className="text-[#F9A51A]">{destination.title}</span>
          </h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 gap-6">
              {accommodations.map((room, index) => (
                <motion.div
                  key={room.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Room Image */}
                    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden relative group">
                      {/* Room Image with Book Now overlay */}
                      <motion.img
                        src={room.image}
                        alt={room.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Book Now Overlay Button */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-[#d6801d41] bg-opacity-30 flex items-center justify-center"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white text-[#F9A51A] font-semibold py-2 px-6 rounded-full shadow-lg"
                        >
                          Book Now
                        </motion.button>
                      </motion.div>
                    </div>

                    {/* Room Details */}
                    <div className="p-6 md:w-2/3">
                      <div className="flex justify-between items-start mb-3">
                        <h2 className="text-xl font-semibold text-gray-800">
                          {room.title}
                        </h2>
                        {/* gfg */}
                        <div className="flex items-center bg-orange-50 px-3 py-1 rounded-full">
                          {/* Rating */}
                          <div className="flex items-center gap-1 text-orange-400">
                            {Array.from({ length: room.rating }).map(
                              (_, i) => (
                                <FaStar key={i} />
                              )
                            )}
                            <span className="ml-2 text-gray-600">
                              {room.rating}
                            </span>
                          </div>
                        </div>
                        {/* gfg */}
                      </div>

                      <p className="text-gray-500 mb-4">{room.type}</p>

                      {/* Room Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="flex items-center text-sm bg-gray-100 px-3 py-1 rounded-full">
                          <MdBedroomParent className="mr-1 text-gray-600" />
                          {room.bedrooms} BR
                        </span>
                        <span className="flex items-center text-sm bg-gray-100 px-3 py-1 rounded-full">
                          <MdBathtub className="mr-1 text-gray-600" />
                          {room.baths} Bath
                        </span>
                        <span className="flex items-center text-sm bg-gray-100 px-3 py-1 rounded-full">
                          👥 {room.guests} Guests
                        </span>
                      </div>

                      {/* Amenities */}
                      <div className="mb-4">
                        <h3 className="font-medium text-gray-700 mb-2">
                          Amenities:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {room.amenities.map((amenity, index) => (
                            <motion.span
                              key={index}
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center text-sm bg-gray-50 px-3 py-1 rounded-full border border-gray-200"
                            >
                              {amenityIcons[amenity] ||
                                amenityIcons[amenity.split(" ")[0]] ||
                                "•"}
                              <span className="ml-2 text-gray-600">
                                {amenity}
                              </span>
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      {room.highlights && (
                        <div className="mb-4">
                          <h3 className="font-medium text-gray-700 mb-2">
                            Highlights:
                          </h3>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {room.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-[#F9A51A] mr-2">•</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Price and Booking */}
                      <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-4 mt-4 border-gray-100">
                        <div className="mb-3 sm:mb-0">
                          <p className="text-lg font-bold text-[#F9A51A]">
                            ${room.price_per_night}/night
                          </p>
                          <p className="text-sm text-gray-500">
                            ${room.total_price} total
                          </p>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MdCancel className="mr-1" />
                          <span>{room.cancellation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:w-1/3 sticky top-4 h-fit">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white p-4 rounded-xl shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-3">Location Map</h3>
              <div className="overflow-hidden rounded-lg">
                <motion.img
                  src={map}
                  alt="Location map"
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Explore the area around {destination.title}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;
