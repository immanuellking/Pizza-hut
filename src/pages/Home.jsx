import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex relative mt-36 sm:mt-0">
      <div className="w-[40%] sm:w-[50%] h-full"></div>
      <div
        className="h-full w-[60%] sm:w-[50%]"
        style={{
          backgroundImage: "url('/pizza.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="absolute top-0 left-0 bottom-0 w-full sm:w-[90%] lg:w-[80%] h-full flex item-center justify-center"
        style={{
          background:
            "linear-gradient(90deg, #FFFFFF 63%, #FFFFFF94 72%, #FFFFFF73 81%, #FFFFFF63 86%, #FFFFFF36 91%, #FFFFFF21 94%, #FFFFFF00 97%, #FFFFFF12 98%, #FFFFFF00 98%, #FFFFFF00 100%)",
        }}
      >
        <div className=" w-full h-full flex flex-col items-center justify-center">
          <div className="space-y-4 px-4 sm:px-4">
            <h1 className="text-5xl sm:text-6xl capitalize tracking-wide">
              We have the <span className="font-bold">best pizza!</span>
            </h1>
            <p className="text-xl sm:text-2xl font-[400] tracking-wider">
              Time to enjoy our delicious pizza.
            </p>
            <button
              className="bg-green-600 hover:bg-green-500 text-lg px-8 py-3 sm:px-10 sm:py-4 font-semibold rounded-full text-white"
              onClick={() => navigate("/menu")}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
