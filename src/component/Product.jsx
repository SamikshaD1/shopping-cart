import React from "react";
import { addToCart } from "../Redux/fetures/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Product({ data }) {
  const dispatch = useDispatch();

  // add to cart
  const send = (e) => {
    dispatch(addToCart(e));
  };

  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-slate-800 text-white">
        {data.map((data, index) => (
          <Link
            key={index}
            className="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-slate-950"
          >
            <div className="h-44">
              <img
                alt="person capturing an image"
                src={data.thumbnail}
                tabIndex="0"
                className="focus:outline-none w-full h-44"
              />
            </div>
            <div className="mt-2">
              <dl>
                <div className="flex items-center justify-between">
                  <dt className="sr-only">Price</dt>

                  <dd className="text-sm text-gray-200">{data.title}</dd>
                  <dt className="sr-only">Rating</dt>

                  <dd className="text-sm px-4 rounded-md text-white bg-green-600">
                    {data.rating}
                  </dd>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <dt className="sr-only">Address</dt>

                  <dd className="font-medium">{data.category}</dd>
                </div>
              </dl>

              <div className="mt-6 flex items-center gap-8 text-xs">
                <button className="block w-full rounded bg-blue-500 text-white p-2 text-sm font-medium">
                  {"₹ "}
                  {data.price}
                </button>
                <button
                  onClick={() => send(data)}
                  className="block w-full rounded bg-yellow-400 p-2 text-sm font-medium transition hover:scale-105"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Product;
