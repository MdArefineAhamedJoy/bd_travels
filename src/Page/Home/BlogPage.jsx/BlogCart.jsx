import React from "react";

const BlogCart = ({ blog }) => {
  const { image, description, destination, type, date, author } = blog;
  return (
    <div className="my-10">
      <div>
        <img className="w-full h-[450px] object-cover" src={image} alt="" />
        <div className="pt-5 flex gap-5 justify-center">
          <div>
            <div className="bg-red-400 p-4 px-6 text-center  text-2xl rounded-sm">
              <p className="">{date?.slice(9, 11)}</p>
              <p className="capitalize">{date?.slice(5, 8)}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center text-2xl font-semibold ">
              <h2>{destination}</h2>: <h2 className="ms-3">{type}</h2>
            </div>
            <p className="pt-5">{description}</p>
            <div className="border-t-2 pt-2 mt-5">
              <div className="flex justify-between">
                <div className="flex gap-10">
                    <p>p</p>
                    <p>l</p>
                </div>
                <div className="flex">
                <p>{author}</p>,
                <p>{type}</p>
                </div>
                <div className="flex gap-10">
                  <p>TWTR</p>
                  <p>Facebook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
