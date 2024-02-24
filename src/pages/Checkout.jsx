import React, { useEffect, useState } from "react";
import BackNav from "../components/BackNav";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import PayButton from "../components/PayButton";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const Checkout = () => {
  const [priority, setPriority] = useState(false);
  const [email, setEmail] = useState("");
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const cart = useSelector((state) => state.cart);
  const totalCartPrice = useSelector((state) => state.totalCartPrice);

  const CheckPhone = (val) => {
    if (val.length && !isValidPhone(val)) {
      setError("Enter a Valid Phone number");
    } else {
      setError("");
    }
  };

  useEffect(() => {
    CheckPhone(phone);
  }, [phone]);

  return (
    <div className="w-[95%] sm:w-[90%] lg:w-[70%] mx-auto my-5 sm:my-10">
      <BackNav title="Checkout" />

      <main className="sm:w-[80%] lg:w-[70%] mx-auto">
        <h1 className="text-xl font-bold mb-5 text-center sm:text-left">
          Delivery Information
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-6">
            <div className="flex flex-col gap-y-2">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="John James"
                aria-label="Full Name"
                name="customer"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                className="border-[2px] border-[#EEEFF2] rounded-lg  px-2 py-2.5 focus:outline-[#aca9a9] valid:border-green-500"
                required
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                aria-label="Email Address"
                className="border-[2px] border-[#EEEFF2] rounded-lg  px-2 py-2.5 focus:outline-[#aca9a9] valid:border-green-500"
                name="email_address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label>Phone Number</label>
              <div className="w-full flex gap-x-2 sm:gap-x-4">
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
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <input
                  type="tel"
                  placeholder="912 345 6789"
                  aria-label="Phone"
                  className="border-[2px] border-[#EEEFF2] rounded-lg  px-2 py-2.5 focus:outline-[#aca9a9] valid:border-green-500 w-full"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              {error && (
                <p className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md">
                  {error}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-y-2">
              <label>Delivery Address</label>
              <input
                type="text"
                placeholder="23, Landmark Street, Lekki, Lagos"
                aria-label="Delivery Address"
                className="border-[2px] border-[#EEEFF2] rounded-lg focus:outline-[#aca9a9]  px-2 py-2.5 valid:border-green-500"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center gap-x-3 mb-20">
              <input
                type="checkbox"
                aria-label="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.checked)}
                name="priority"
                className="h-6 w-6 cursor-pointer checked:accent-black"
              />
              <label className="text-lg font-semibold">
                Give your order priority ?
              </label>
            </div>
          </div>

          {customer && address && phone && email ? (
            <div className="flex justify-center mt-10">
              <PayButton
                amount={totalCartPrice * 1700}
                email={email}
                cart={cart}
                customer={customer}
                address={address}
                phone={phone}
                priority={priority}
              />
            </div>
          ) : (
            <div className="flex justify-center mt-10">
              <Button disabled={true} type="disabled">
                Checkout
              </Button>
            </div>
          )}
        </form>
      </main>
    </div>
  );
};

export default Checkout;
