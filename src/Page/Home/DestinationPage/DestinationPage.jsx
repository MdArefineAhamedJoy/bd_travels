import React, { useEffect, useState } from "react";

const DestinationPage = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("banner.json")
      .then((response) => response.json())
      .then((data) => setDestinations(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto ">
      <div className="text-center w-9/12 mx-auto mt-20">
        <h1 className=" text-4xl pb-6">Choose Your Destination</h1>
        <p className="text-lg leading-8 backdrop-blur-xl font-thin ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          sollicitudin, tellus vitae condimentum egestas, libero dolor auctor
          tellus, eu consectetur neque elit quis nunc. Cras elementum pretium
          est.
        </p>
      </div>
      <section className="grid md:grid-cols-4 gap-5 my-20">
        {destinations.map(({ image, name, _id }) => (
          <div key={_id} className="relative overflow-hidden">
            <div>
              <img
                className="h-80 w-72 rounded transform  hover:scale-110 transition-transform duration-300"
                src={image}
                alt=""
              />
            </div>
            <h3 className="absolute text-white capitalize drop-shadow-2xl text-2xl font-bold bottom-10 left-5 ">
              {name}
            </h3>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DestinationPage;
