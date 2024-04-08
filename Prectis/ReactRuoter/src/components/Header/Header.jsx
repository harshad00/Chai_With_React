import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-yellow-400 w-full ">
      <nav className=" w-full flex justify-between text-white px-4 py-1 items-center ">
        <div className=" text-3xl uppercase text-red-800  ">logo</div>
        <div>
          <ul className=" flex text-xl gap-7">
            <li> <Link to={"/"}>Home</Link> </li>
            <li> <Link to={'/about'}>About</Link> </li>
            <li> <Link to={'/contact'}>Contact</Link> </li>
            <li> <Link>Help</Link> </li>
          </ul>
        </div>

        <div>
            <button className=" outline-none px-4 py-1 bg-blue-400 text-white m-2 rounded-xl"> Login</button>
            <button className=" outline-none px-4 py-1 bg-white  text-blue-400 rounded-xl"> shin up</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
