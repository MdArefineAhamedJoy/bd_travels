import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    fetch("shop.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="">
      <div className="h-20  mt-4 mb-20 py-2 bg-gray-100 px-7 flex items-center justify-between">
        <h4 className="capitalize">BDTraveler{path} </h4>
        <div className="flex gap-5 ">
          <div className="uppercase  flex gap-3 items-center">
            <FaFacebook /> <small>Facebook</small>
          </div>
          <div className="uppercase flex gap-3 items-center">
            <FaTwitter /> <small>Twitter</small>
          </div>
        </div>
      </div>
      <div className="flex w-11/12 mx-auto my-32 ">
        <section className="w-10/12 pe-5">
          <div className="grid grid-cols-3 gap-5 ">
            {products.map((product) => (
              <div className="card  rounded-none  group shadow-md">
                <div class="relative group overflow-hidden">
                  <figure>
                    <img class="w-full h-64" src={product?.image} alt="Shoes" />
                  </figure>
                  <div class="opacity-0 absolute bottom-0 w-full transition-opacity duration-500 transform translate-y-0 group-hover:opacity-100  ">
                    <button class="btn rounded-none w-full text-[#2c837f] font-bold bg-gray-300">Add To Cart</button>
                  </div>
                </div>

                <div className="pt-3 p-1 pb-2 flex  justify-between border-b">
                  <h2 className=" font-semibold">{product?.productName}</h2>
                  <p>{product?.rating}</p>
                </div>
                <p className="py-2  p-1 font-bold text-[#2c837f]">{product?.price}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="w-2/12">
        <div class="relative w-full">
            <input
              class="border-2 font-bold  focus:outline-none py-3 px-2 pe-9 my-2 w-full bg-transparent "
              type="text"
              placeholder="Search..."
            />
            <button
              class="absolute right-[0px] top-0 bottom-0 h-full  px-2 pe-3 text-gray-600 "
              type="button"
            >
              <div>
                <BsSearch />
              </div>
            </button>
          </div>
          <h2 className="mt-10 mb-5 text-lg font-semibold">Product Categories</h2>
          <ul>
            <li className="shadow-sm font-medium my-1 p-2 hover:text-red-500 flex items-center bg-base-100 hover:bg-gray-300 w-full rounded-none  duration-300 cursor-pointer ">Accessories</li>
            <li className="shadow-sm font-medium my-1 p-2 hover:text-red-500 flex items-center bg-base-100 hover:bg-gray-300 w-full rounded-none  duration-300 cursor-pointer ">Designer</li>
            <li className="shadow-sm font-medium my-1 p-2 hover:text-red-500 flex items-center bg-base-100 hover:bg-gray-300 w-full rounded-none  duration-300 cursor-pointer ">Equipment</li>
            <li className="shadow-sm font-medium my-1 p-2 hover:text-red-500 flex items-center bg-base-100 hover:bg-gray-300 w-full rounded-none  duration-300 cursor-pointer ">Exercize</li>
            <li className="shadow-sm font-medium my-1 p-2 hover:text-red-500 flex items-center bg-base-100 hover:bg-gray-300 w-full rounded-none  duration-300 cursor-pointer ">Sculpture</li>
            <li className="shadow-sm font-medium my-1 p-2 hover:text-red-500 flex items-center bg-base-100 hover:bg-gray-300 w-full rounded-none  duration-300 cursor-pointer ">Shoes</li>
            <li className="shadow-sm font-medium my-1 p-2 hover:text-red-500 flex items-center bg-base-100 hover:bg-gray-300 w-full rounded-none  duration-300 cursor-pointer ">Uncategorized</li>
            <li className="shadow-sm font-medium my-1 p-2 hover:text-red-500 flex items-center bg-base-100 hover:bg-gray-300 w-full rounded-none  duration-300 cursor-pointer ">Vintage</li>
          </ul>
          <h2 className="mt-14 font-bold text-xl">Popular Products</h2>
          <div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default ShopPage;
