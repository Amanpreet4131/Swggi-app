import React, { useEffect, useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

export default function Catagory() {

    const[slide, setSlide] = useState(0);
  const [catagory, setcatagory] = useState([]);

  const fetchCatagory = async () => {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setcatagory(data);
  };

  useEffect(() => {
    fetchCatagory();
  }, []);

  const nextslide = () =>{
    if(catagory.length - 10 === slide ) return false;
    setSlide(slide + 2);
  }
  const prevslide = () =>{
    if(slide === 0) return false;
    setSlide(slide - 2 );
  }
  return (
    <>
      <div className="max-w-[1500px] mx-auto  ">
        <div className="flex items-center justify-between">
          <div className="text-[25px] items-bold">What's on your mind ?</div>
          <div className="flex ">
            <div className=" flex justify-center items-center  w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
              <GoArrowLeft onClick={prevslide}/>
            </div>
            <div className=" flex justify-center items-center  w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
              <GoArrowRight   onClick={nextslide}/>
            </div>
          </div>
        
        </div>
        <div className="flex  overflow-hidden ">
            {
                catagory.map(
                    (cat,index) => {
                        return(
                        <div  style={{
                            transform : `translateX(-${slide * 100}%)`
                        }}  key={index}  className="w-[150px] shrink-0">
                            <img src={"http://localhost:5000/images/"+cat.image} alt="" />
                        </div>
                        )

                    }
                )
            }
          </div>
          <hr className="my-4 border-[2px]"/>
      </div>
      
    </>
  );
}
