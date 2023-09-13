import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-300  flex items-center justify-between  px-10  py-5 xs:px-4">
        <div>
          {/* logo */}
          <p>Logo</p>
        </div>
        <div>
          <ul className="flex items-center gap-6 text-white">
            <li className="font-semibold xs:text-sm">About</li>
            <li className="font-semibold xs:text-sm">Create Account</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
