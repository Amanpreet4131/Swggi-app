import React, { useEffect, useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Card from "./Card";

export default function Toprest() {
  const [data, setdata] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await response.json();
    setdata(apiData);
  };

  useEffect(() => {
    fetchTopRestaurant();
  });
  return (
    <>
      <div className="max-w-[1500px] mx-auto ">
        <div className="flex items-center justify-between">
          <div className="text-[25px] items-bold">
            Top restaurant chains in Chandigarh
          </div>
          <div className="flex ">
            <div className=" flex justify-center items-center  w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
              <GoArrowLeft />
            </div>
            <div className=" flex justify-center items-center  w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
              <GoArrowRight />
            </div>
          </div>
        </div>
        <div className="flex gap-5 overflow-hidden">

          {
            data.map(
              (d,index) => {
                return <Card {...d} key={index}/>

              }
            )
          }
          
         
        </div>
      </div>
    </>
  );
}
