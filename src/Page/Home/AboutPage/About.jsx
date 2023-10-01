import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const About = () => {
  const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = {
    lat: 37.7749, // Latitude of your map center
    lng: -122.4194 // Longitude of your map center
  };
  return (
    <div>
      <main className="w-11/12 mx-auto my-20">
        <div className="flex ">
          <section className="w-8/12 ">
          <h1 className=" text-3xl font-bold pb-5 text-neutral-800">About Us</h1>
            <article className="text-neutral-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sollicitudin, tellus vitae condimentum egestas, libero dolor
                auctor tellus, eu consectetur neque elit quis nunc. Cras
                elementum pretium est. Nullam ac justo efficitur, tristique
                ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et
                tellus nec, maximus viverra metus. Nullam elementum nibh nec
                pellentesque finibus. Suspendisse laoreet velit at eros
                eleifend, a pellentesque urna ornare. In sed viverra dui. Duis
                ultricies mi sed lorem blandit, non sodales sapien fermentum.
                Pellentesque sodales ipsum nisi.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sollicitudin, tellus vitae condimentum egestas, libero dolor
                auctor tellus, eu consectetur neque elit quis nunc. Cras
                elementum pretium est. Nullam ac justo efficitur, tristique
                ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et
                tellus nec, maximus viverra metus.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sollicitudin, tellus vitae condimentum egestas, libero dolor
                auctor tellus, eu consectetur neque elit quis nunc. Cras
                elementum pretium est. Nullam ac justo efficitur, tristique
                ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et
                tellus nec, maximus viverra metus. Nullam elementum nibh nec
                pellentesque finibus. Suspendisse laoreet velit at eros
                eleifend, a pellentesque urna ornare. In sed viverra dui. Duis
                ultricies mi sed lorem blandit, non sodales sapien fermentum.
                Suspendisse ultrices nulla eu volutpat volutpat.
              </p>
            </article>
          </section>
          <section className="w-4/12">
          <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10} // Adjust the zoom level as needed
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
          </section>
        </div>
        <h2 className="text-2xl my-10">Recommended</h2>
      </main>
    </div>
  );
};

export default About;
