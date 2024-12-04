import { Link } from "react-router-dom";
import Subscription from "../pages/Subscription";
import Home from "../pages/Home";
import Cards from "../pages/Cards";
import Details from "../pages/Details";
import { useState } from "react";
import Watch from "../pages/Watch";
import Properties from "../pages/properties";
export default () => {
  const [input, setinput] = useState("");
  return (
    <>
      <div className="flex items-center justify-between p-4 ">
        <div className="flex items-center justify-center flex-row">
          <img src="/palais.png" height={50} width={50} />
          <h1 className="text-2xl font-bold tracking-wider">Disney +</h1>
        </div>
        <div className="flex items-center justify-center list-none flex-row">
          <ul className="flex flex-row gap-4">
            <Link to="/home" element={<Home />}>
              <li>Home</li>
            </Link>
            <Link to="/whatotowatch" element={<Cards />}>
              <li>What to watch</li>
            </Link>
            <Link to="/browse" element={<Details />}>
              <li>Browse</li>
            </Link>
            <Link to="/subscription" element={<Subscription />}>
              <li>Subscribe</li>
            </Link>
            <Link to="/watch" element={<Watch />}>
              {" "}
              <li>Watch</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center justify-center flex-row gap-4 ">
          <div className="flex items-center jusfity-center flex-row ">
            <input
              type="text"
              id="input"
              name="search"
              placeholder="search..."
              className="rounded-lg p-2 text-xl border-none "
              onChange={(e) => setinput(e.target.value)}
            />
            <hr className="w-full bg-black" />
          </div>
          <div className="flex gap-4 items-center justify-center ">
            <Link to="/Cards">
              <button className="flex items-center p-4 rounded-lg text-white bg-blue-700 hover:bg-white hover:text-blue-700 hover:border-blue-700 border-blue-700 transition-all duration-200 ">
                Browse
              </button>
            </Link>
            <a href="/subscription">
              <button className="flex items-center p-4 rounded-lg hover:bg-blue-700 border-blue-700 border-2 transition-all duration-200 ">
                Sign up
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
