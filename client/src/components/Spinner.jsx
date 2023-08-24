import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center mt-[100px]">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Spinner;
