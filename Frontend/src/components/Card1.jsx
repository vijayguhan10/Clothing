import React from 'react'
import image1 from '../assets/tee1.png'
import image2 from '../assets/tee2.png'
import image3 from '../assets/tee3.png'
import image4 from '../assets/tee4.png'

const Card1 = () => {
  return (
    <div>
    <div class="container mx-auto ">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <img src={image1} alt="Person 1" className="w-full  object-cover transition-duration-500 hover:scale-110"/>
    </div>
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <img src={image2} alt="Person 2" class="w-full  object-cover transition-duration-500 hover:scale-110"/>
    </div>
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <img src={image3} alt="Person 3" class="w-full  object-cover transition-duration-500 hover:scale-110"/>
    </div>
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <img src={image4} alt="Person 4" class="w-full  object-cover transition-duration-500 hover:scale-110"/>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default Card1
