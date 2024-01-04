import React from "react";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const { carts } = useSelector((state) => state.allCart);

  return (
    <>
      <div className="bg-black  flex flex-row justify-between items-center px-4 py-2">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold sm:text-2xl ">
          Shooping Cart
        </Link>

        {/* E-commerce Basket */}
        <div className="flex items-center gap-5 m-1 px-2">
          <Link to={"/cart"} className=" text-white relative">
            <SlBasket size={28} className=" cursor-pointer" />
            <div className=" absolute top-[-8px] right-[-12px] bg-red-600 w-[22px] h-[22px] rounded-full text-white text-sm font-bold grid place-items-center">
              {carts.length}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
