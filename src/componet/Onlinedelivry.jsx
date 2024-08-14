
import Card from './Card'
import React, { useEffect, useState } from "react";

export default function Onlinedelivry() {
    const [data, setdata] = useState([]);

    const fetchTopRestaurant = async () => {
      const response = await fetch("http://localhost:5000/top-restaurant-chains");
      const apiData = await response.json();
      setdata(apiData);
    };
  
    useEffect(() => {
      fetchTopRestaurant();
    },[]
)
  return (
    <div className="max-w-[1500px] mx-auto ">
        <div className="flex items-center justify-between">
          <div className="text-[25px] items-bold">
          Restaurants with online food delivery in Chandigarh
          <br />
          <br />
          </div>
          
        </div>
        <div className='grid grid-cols-4 gap-3'>
            {
                data.map(
                    (d,index) =>{
                        return<Card {...d}/>
                    }
                )
            }
        </div>
        
    </div>
  )
}
