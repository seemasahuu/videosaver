import React from "react";
// import img9 from "/Assests/house-black-silhouette-without-door.png"
// import img10 from "/Assests/bookmark.png"
// import img11 from "/Assests/equalizer.png"
import { RiHome2Fill } from "react-icons/ri";
import { HiSave } from "react-icons/hi";
import { MdOutlineDataset } from "react-icons/md";
import { Link } from "react-router-dom";

const Saver = () => {
  return (
    <div className="bg-slate-200 w-full h-screen">
      <div
        className="h-44 "
        style={{
          borderRadius: "0 0 20% 20%",
          background:
            "linear-gradient(90deg, rgba(235,152,22,1) 0%, rgba(253,29,29,1) 50%, rgba(10,16,101,1) 100%)",
        }}
      ></div>
      <div className="flex justify-center py-6 font-serif font-bold">
        Instagran Post and Reel Link
      </div>

      <div className="flex justify-center mt-10">
      <div
        className="flex items-center flex-col justify-center gap-3 h-40 w-80   rounded-md "
        style={{ border: "solid 1px gray" }}
      >
        <input
          className="h-12 w-64 rounded-md px-6"
          placeholder="Open Instagram & Copy Link "
        />
        <Link to="/Videoviewpage">
          <button
            className="h-12 w-64 rounded-md text-white"
            style={{
              background:
                "linear-gradient(90deg, rgba(235,152,22,1) 0%, rgba(253,29,29,1) 50%, rgba(10,16,101,1) 100%)",
            }}
          >
            Open Instagram
          </button>
        </Link>

        </div>
      </div>
      <div className="h-14 mt-72 lg:mt-44"></div>
      <div className=" flex items-center justify-center gap-6 h-10">
        <RiHome2Fill className="h-6 w-24 " />
        <HiSave className="h-6 w-24" />
        <MdOutlineDataset className="h-6 w-24" />

        {/* <img className="h-16" src={img9} alt="img9" />
        <img className="h-16" src={img10} alt="img10" />
        <img className="h-16" src={img11} alt="img11" /> */}
      </div>
    </div>
  );
};

export default Saver;
