import React from "react";
import BackNav from "../components/BackNav";
import Button from "../components/Button";

const Checkout = () => {
  return (
    <div className="w-[95%] sm:w-[90%] lg:w-[70%] mx-auto my-5 sm:my-10">
      <BackNav title="Checkout" />

      <main className="w-[70%] mx-auto">
        <h1 className="text-xl font-bold mb-5">Delivery Information</h1>
        <form action="" className="space-y-5">
          <div className="flex flex-col gap-y-2">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="John James"
              aria-label="Full Name"
              name="full_name"
              className="border-[1.5px] border-[#EEEFF2] rounded-lg  px-2 py-2.5 focus:outline-[1.5 px] focus:outline-[#aca9a9] required:border-red-500"
              required
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              aria-label="Email Address"
              className="border-[1.5px] border-[#EEEFF2] rounded-lg  px-2 py-2.5 focus:outline-[1.5 px] focus:outline-[#aca9a9] required:border-red-500"
              name="email_address"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label>Phone Number</label>
            <div className="w-full flex gap-x-4">
              <div className="flex items-center border-[1px] px-4 space-x-3 rounded-lg">
                <img
                  alt="Ngn"
                  src="nigeria.svg"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M13.28 5.96667L8.9333 10.3133C8.41997 10.8267 7.57997 10.8267 7.06664 10.3133L2.71997 5.96667"
                      stroke="#7E8494"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
              </div>
              <input
                type="tel"
                placeholder="912 345 6789"
                aria-label="Email Address"
                className="border-[1.5px] border-[#EEEFF2] rounded-lg  px-2 py-2.5 focus:outline-[1.5 px] focus:outline-[#aca9a9] required:border-red-500 w-full"
                name="phone_no"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <label>Delivery Address</label>
            <input
              type="text"
              placeholder="23, Landmark Street, Lekki, Lagos"
              aria-label="Delivery Address"
              className="border-[1.5px] border-[#EEEFF2] rounded-lg  px-2 py-2.5 focus:outline-[1.5 px] focus:outline-[#aca9a9] required:border-red-500"
              name="delivery_address"
            />
          </div>

          <div className="flex justify-center mt-5">
            <Button type="secondary" onClick>
              Checkout
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Checkout;
