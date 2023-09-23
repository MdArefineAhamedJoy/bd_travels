import React from "react";

const UsefulInformation = () => {
  return (
    <div className="mt-32">
      <div className="text-center w-9/12 mx-auto">
        <h1 className="text-4xl pb-6">Other Useful Information</h1>
        <p className="text-lg leading-8 backdrop-blur-xl font-thin">
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
          nisi elit consequat ipsum, nec sagittis sem nibh id elit.
        </p>
      </div>
      <main className="flex my-20 gap-5">
        <section className="grid grid-cols-2 w-8/12 gap-5">
          <div className="card rounded-none">
            <figure>
              <img
                className="w-full h-48"
                src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/home-1-image-1.jpg"
                alt=""
              />
            </figure>
            <div className="mb-3">
              <h2 className="card-title py-4">Private Guide Tour</h2>
              <p className="leading-6">
                Duis dolor est, tincidunt vel enim sit amet, venenatis euismod
                neque. Duis eleifend ligula id tortor finibus faucibus. Donec et
                quam pulvinar, blandit tortor.
              </p>
            </div>
          </div>
          <div className="card rounded-none ">
            <figure>
              <img
                className="w-full h-48"
                src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/home-1-image-2.jpg"
                alt=""
              />
            </figure>
            <div className="mb-3">
              <h2 className="card-title py-4">Special Activities</h2>
              <p className="text-justify leading-6">
                Duis dolor est, tincidunt vel enim sit amet, venenatis euismod
                neque. Duis eleifend ligula id tortor finibus faucibus. Donec et
                quam pulvinar, blandit tortor.
              </p>
            </div>
          </div>
        </section>
        <section className="w-4/12">
          <div className="collapse collapse-arrow  border  rounded-none">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Sightseeing Tour Booking
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sollicitudin, tellus vitae condimentum egestas, libero dolor
                auctor.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow  border rounded-none">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Paris Honeymoon
            </div>
            <div className="collapse-content">
              <p>
                Nullam ac justo efficitur, tristique ligula a, pellentesque
                ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus
                viverra metus
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow  border rounded-none">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              South Africa Adventure
            </div>
            <div className="collapse-content">
              <p>
                Duis dolor est, tincidunt vel enim sit amet, venenatis euismod
                neque. Duis eleifend ligula id tortor finibus faucibus. Donec et
                quam pulvinar blandit tortor.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow  border rounded-none">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              South Africa Adventure
            </div>
            <div className="collapse-content">
              <p>
                Duis dolor est, tincidunt vel enim sit amet, venenatis euismod
                neque. Duis eleifend ligula id tortor finibus faucibus. Donec et
                quam pulvinar blandit tortor.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UsefulInformation;
