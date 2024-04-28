import React from "react";

const NavBar = () => {
  return (
    <section>
      <div className="bg-white flex justify-between items-center px-10">
            <img src='images/navbarlogo.png' />
            <button className='bg-primary px-3 py-1 text-white rounded-md'>Join Waiting List</button>
      </div>
    </section>
  );
};

export default NavBar;
