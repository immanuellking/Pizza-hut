import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen flex relative">
      <div className="w-[50%] h-full"></div>
      <div
        className="h-full w-[50%]"
        style={{
          backgroundImage: "url('/pizza.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="absolute top-0 left-0 bottom-0 w-[80%]"
        style={{
          background:
            "linear-gradient(90deg, #FFFFFF 63%, #FFFFFF94 72%, #FFFFFF73 81%, #FFFFFF63 86%, #FFFFFF36 91%, #FFFFFF21 94%, #FFFFFF00 97%, #FFFFFF12 98%, #FFFFFF00 98%, #FFFFFF00 100%)",
        }}
      >
        <h1 className="text-5xl capitalize">
          We have the <span className="font-bold">best pizza!</span>
        </h1>
        <p className="text-xl font-[400] tracking-wider">Time to enjoy our delicious pizza.</p>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default Home;
