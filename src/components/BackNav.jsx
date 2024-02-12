import React from "react";

const BackNav = ({ title }) => {
  return (
    <div className="w-full flex items-center justify-center relative mb-20">
      <div
        className="flex items-center absolute left-0 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <svg
          width="28"
          height="10"
          viewBox="0 0 28 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.94997 5.35647C0.994502 5.47131 1.0613 5.57678 1.14684 5.66583L4.89684 9.41583C5.07263 9.59278 5.31285 9.69356 5.56248 9.69356C5.81211 9.69356 6.05232 9.59278 6.22812 9.41583C6.40508 9.24004 6.50586 8.99982 6.50586 8.75019C6.50586 8.50056 6.40508 8.26035 6.22812 8.08455L4.07187 5.93769H26.6562C27.1742 5.93769 27.5937 5.51817 27.5937 5.00019C27.5937 4.48221 27.1742 4.06269 26.6562 4.06269H4.07187L6.22812 1.91583C6.5961 1.54785 6.5961 0.952559 6.22812 0.584579C5.86014 0.216599 5.26485 0.216599 4.89687 0.584579L1.14687 4.33458C1.06133 4.42364 0.994532 4.52911 0.95 4.64394C0.901952 4.75644 0.876173 4.87714 0.875 5.00019C0.876172 5.12324 0.901953 5.24394 0.95 5.35644L0.94997 5.35647Z"
            fill="black"
          ></path>
        </svg>
        <div className="ml-4">Back</div>
      </div>
      <h1 className="text-center text-3xl font-semibold">{title}</h1>
    </div>
  );
};

export default BackNav;
