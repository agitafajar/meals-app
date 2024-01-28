import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full justify-between flex p-6 font-semibold items-center -mb-6">
      <Link href="/" className="flex gap-1 items-center">
        <p className="font-bold text-3xl text-[#3aeac1]">Meals</p>
        <p className="text-lg pt-1">Application</p>
      </Link>
      <div className="border-2 border-[#84FADF] rounded-full py-2 px-12 flex gap-12">
        <button> Meals</button>
        <button>List Meals</button>
        <button>Price Meals</button>
        <button>Detail Meals</button>
        <button>Ingredient Meals</button>
      </div>

      <a
        href="https://wa.me/82132547395"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black"
      >
        <p className="border-2 bg-[#84FADF] border-[#84FADF] rounded-full py-2 px-12">
          Contact
        </p>
      </a>
    </div>
  );
};

export default Header;
