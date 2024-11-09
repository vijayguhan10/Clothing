import React from 'react';
import image1 from '../assets/Banner 1.png'
import image2 from '../assets/banner 2.png'
import image3 from '../assets/banner 3.png'



import Slider from 'react-slick';

const HeroData = [
    {
        id:1,
        image:image1,
        
        title:"FLAT 40% OFF",
        title1:"on T-Shirts"
        
    },
    {
        id:2,
       
        title:"FLAT 40% OFF",
        title1:"on Athleisures",
        image:image2
    },
    {
        id:3,
       
        title:"FLAT 40% OFF",
        title1:"on Shirts",
        image:image3,

    }
]

const Hero = () => {
    const settings = {
        dots:false,
        arrows:false,
        infinite:true,
        speed:800,
        slidesToScroll:1,

        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,
    }
  return (
    <div className="container mx-auto pt-5">
        <div className="overflow-hidden  rounded-3xl  flex justify-start items-center  hero-bg-color  ">
        <div className="container  ">
            <Slider {...settings}>
                 {HeroData.map((data)=>(
                    <div key={data.id}>
                        <div className="grid grid cols-1 relative">
                            <div className="flex flex-col justify-center pl-32 gap-4 absolute ">
                                <h1 className="text-7xl font-bold">{data.title}</h1>
                                <h1 className="text-7xl font-bold">{data.title1}</h1>
                                <div>
                                    <button className="rounded-full bg-blue-400 text-white p-2">Shop by category</button>
                                </div>
                            </div>
                            <div >
                                <div className="flex justify-end ">
                                <img src={data.image} alt="" 
                                className="w-[795px] h-[356px] object-contain    drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]" />
                                   
                                </div>
                            </div>


                        </div>
                    </div>

                 )
                 )}            
            </Slider>
            </div>
        </div>
        <div className="container my-20 mx-20 flex justify-start gap-56"> <h1 className="text-7xl font-bold">TRENDING <spam className="text-5xl font-semibold"> BEACH SHORTS</spam></h1>
        <button class="bg-black text-white font-bold py-2 px-4 uppercase rounded-full">EXPLORE NOW</button>

        </div>
      
    </div>
    
  )
}

export default Hero
