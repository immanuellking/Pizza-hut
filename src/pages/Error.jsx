import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[80vh] flex justify-center items-center">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">OOPS!</h1>
        <p className="font-medium">Sorry, an unexpected error has occurred.</p>
        <p className="text-red-400 text-lg">
          <i>{error.statusText || error.message}</i>
        </p>
        <button
          className="bg-green-600 text-white px-8 py-2"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error;
