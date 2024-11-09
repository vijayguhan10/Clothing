import React from 'react'
import image1 from '../assets/GIFT.jpg'

const Banner = () => {
  return (
    <div className=" container mx-auto pt-5">
       <div className="container  my-20 ">
            <div className="overflow-hidden  rounded-3xl  flex justify-start items-center  gap-12 banner-bg-color cursor-pointer object-cover transition-duration-500 hover:scale-110">
               <img src={image1} alt="" className="w-[595px] h-[356px] object-contain ml-5 "/>
               <h1 className="text-7xl font-bold"> <spam className="text-5xl font-semibold">GET GIFT ACCESORIES<br/>FOR PURCHASE OVER </spam>5000 RS</h1>
                
            </div>

       </div>
       <div className="container mx-20 my-20 flex justify-between"> <h1 className="text-7xl font-bold">NEW <spam className="text-5xl font-semibold"> ARRIVALS</spam></h1>
        <button class="bg-black text-white font-bold py-2 px-4 uppercase rounded-full mr-36">EXPLORE NOW</button>

        </div>

      
    </div>
  )
}

export default Banner
