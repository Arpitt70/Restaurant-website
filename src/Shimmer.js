import React from "react";

const Shimmer = () => {
  return (
    <>
      {Array(10)
        .fill("")
        .map((e, index)=><div key={index} className="shimmer-card"></div>)}
    </>
  );
};

export default Shimmer;
