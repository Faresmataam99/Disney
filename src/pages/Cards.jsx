import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate() ;
  const [trailer,settrailer]=useState()
  const handlemovietrailer = ()=>{

    navigate(`/trailer?url=${encodedURIComponent(movie.trailer)}`)
  };
  return (
    <div className="flex items-center justify-center hover:scale-105 hover:shadow-white transition-all duration-200">
      <div className="flex items-center justify-center flex-col gap-4 p-4">
        <img  
          width={150}
          height={150}
          src={props.image}
          alt=""
          className="object-cover rounded-lg"
        />
        <h1 className="text-xl font-bold">{props.title}</h1>
        <Link to="/properties"><button onClick={trailer} className="bg-orange-800 text-white font-bold p-4 rounded-lg  ">Watch trailer</button></Link>
      </div>
      
    </div>
  );
}