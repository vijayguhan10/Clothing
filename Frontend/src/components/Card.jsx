import React from 'react'
import image1 from '../assets/sh1.png'
import image2 from '../assets/sh2.png'
import image3 from '../assets/sh3.png'
import image4 from '../assets/sh4.png'
import image5 from '../assets/sh5.png'


const Card = () => {
  return (
    <div>
        <div className="container mx-auto">
        <div class="grid grid-cols-5 gap-4">
  <div class="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer group-hover:rotate-3 group-hover:scale-125 transition-transform group-hover:translate-y-0 transition-all">
    <img src={image1} alt="Card 1" className="w-full object-cover transition-duration-500 hover:scale-110"/>
  </div>
  <div class="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
    <img src={image2} alt="Card 2" className="w-full object-cover transition-duration-500 hover:scale-110"/>
  </div>
  <div class="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
    <img src={image3} alt="Card 3" className="w-full object-cover transition-duration-500 hover:scale-110"/>
  </div>
  <div class="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
    <img src={image4} alt="Card 4" className="w-full object-cover transition-duration-500 hover:scale-110"/>
  </div>
  <div class="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
    <img src={image5} alt="Card 5" className="w-full object-cover transition-duration-500 hover:scale-110"/>
  </div>
</div>

        </div>

      
    </div>
  )
}

export default Card
