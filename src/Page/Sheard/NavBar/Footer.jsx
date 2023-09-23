import React from "react";

const Footer = () => {
  return (
    <main>
      <section className="bg-neutral-800 ">
        <div className="flex justify-between text-white w-11/12 mx-auto py-10">
          <h1 className="text-2xl font-light ">
            It’s Time For a New Adventure! Don’t Wait Any Longer. Contact us!
          </h1>
          <button className="uppercase btn">Book Destination</button>
        </div>
      </section>
      <section className="text-white bg-neutral-900 ">
        <div className="grid md:grid-cols-4 w-11/12 mx-auto border-b py-14">
          <div className="p-2">
            <h3 className="text-xl pb-5 font-semibold">BD Traveler</h3>
            <p className="pb-6">
              Nullam ac justo efficitur, tristique ligula. Lorem Ipsn gravida
              nibh vel velit auctor aliquet. Aenean sollicitudin.
            </p>
            <p className="py-2">
              <small> 1-677-124-44227</small>
            </p>
            <p className="py-2">
              <small>184 Main Street West Victoria 8007</small>
            </p>
            <p className="py-2">
              {" "}
              <small>Mon - Sat 8.00 - 18.00 Sunday</small>
              CLOSED
            </p>
          </div>
          <div className="p-2">
            <h3 className="text-xl pb-5 font-semibold">Latest News</h3>
            <p>Water & Rocks: Discovering the Beauty of New Zealand</p>
            <p className="pb-4 pt-1 "><small >05.4.2016</small></p>
            <p className="pt-4 pb-1 border-t">
              Updates: People Who Work Overseas and Fly For Free
            </p>
            <small>05.4.2016</small>
          </div>
          <div className="p-2">
            <h1 className="text-xl pb-5 font-semibold">Gallery </h1>
          </div>
          <div className="p-2">
            <h3 className="text-xl pb-5 font-semibold">Follow Us</h3>
            <p>Couldn't connect with Twitter</p>
          </div>
        </div>
      </section>
      <section className="text-white bg-black">
        <div className="w-11/12 mx-auto py-5">
          <p>© 2016 Qode Interactive, All Rights Reserved</p>
        </div>
      </section>
    </main>
  );
};

export default Footer;
