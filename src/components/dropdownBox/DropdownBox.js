import React from "react";

const DropdownBox = ({ className, children }) => {
  return (
    <div
      className={`linear duration-300 hidden group-hover:block animate-[popDownY_.4s_ease_1] text-black lg:absolute top-[4.7vw] left-[-1vw] bg-white w-[50vw] lg:w-[17vw] py-3 px-4 z-10 drop-shadow-lg ${className}`}
    >
      <ul>{children}</ul>
    </div>
  );
};

export default DropdownBox;
