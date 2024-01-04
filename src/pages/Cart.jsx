import React, { useEffect, useState } from "react";
import { HiTrash } from "react-icons/hi2";
import { SlBasket } from "react-icons/sl";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { HiOutlineMinusCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeSingleItem,
  removeToCart,
} from "../Redux/fetures/cartSlice";

const Cart = () => {
  const [totalPrice, settotalPrice] = useState(0);
  const cartData = useSelector((state) => state.allCart.carts);
  const dispatch = useDispatch();

  //Total Price
  const total = () => {
    let totalPrice = 0;
    cartData.map((e) => {
      totalPrice = e.price * e.qnty + totalPrice;
    });
    settotalPrice(totalPrice);
  };

  useEffect(() => {
    total();
  }, [total]);

  const handleIncr = (e) => {
    dispatch(addToCart(e));
  };
  const handleDecr = (e) => {
    dispatch(removeSingleItem(e));
  };

  const handleRemoveItem = (e) => {
    dispatch(removeToCart(e));
  };

  if (cartData.length === 0) {
    return (
      <div className="flex justify-center align-middle p-2 mt-16 flex-row bg-yellow-300">
        <SlBasket size={100} />
        <div className="text-center text-2xl font-bold mt-6 px-10 py-2 ">
          Your Cart is Empty
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gray-500 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">
        Cart
        {cartData.length > 0 ? `(${cartData.length})` : ""}
      </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {/* First Product */}
          {cartData.map((cartItem, index) => (
            <div
              key={index}
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
            >
              <img
                src={cartItem.thumbnail}
                alt="product-image"
                className="h-24 w-full rounded-lg object-cover sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <p className="mt-1 text-2xl text-gray-700">
                    {"₹ "}
                    {cartItem.price}
                  </p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    {/* Cart Single Item */}
                    <div className="prdct-qty-container">
                      <div className="flex items-center mt-1">
                        <button>
                          <HiOutlineMinusCircle
                            onClick={() => handleDecr(cartItem)}
                            className="h-7 w-7 text-gray-500 hover:outline-none hover:text-yellow-600 hover:h-6"
                          />
                        </button>

                        <span className="text-gray-700 text-lg mx-2">
                          {cartItem.qnty}
                        </span>
                        <button>
                          <HiOutlinePlusCircle
                            onClick={() => handleIncr(cartItem)}
                            className="h-7 w-7 text-gray-500 hover:outline-none hover:text-yellow-600 hover:h-6"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">
                      {"₹ "}
                      {cartItem.qnty * cartItem.price}
                    </p>
                    <HiTrash
                      onClick={() => handleRemoveItem(cartItem.id)}
                      className="h-6 w-6  cursor-pointer duration-150 hover:text-red-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sub total */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">
              {"₹ "}
              {totalPrice}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">{"₹ "}0.00 </p>
          </div>
          <hr className="my-4" />
          <div aria-readonly className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                {"₹ "}
                {totalPrice}
              </p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
