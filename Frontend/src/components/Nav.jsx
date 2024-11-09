import React from 'react';
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBorderAll } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="container mx-auto">
       <div className="container  flex justify-between ">
         <a href="">
          <h1 className=" text-3xl font-semibold uppercase m-5   ">S O<spam className="text-blue-400"> K </spam>K A</h1> 
          </a>        
          <div>
            <ul className="flex justify-end gap-6 m-6">
                <li>
                  <div className="relative group  ">
                     <input type="text" placeholder="Search" className="Search-bar"/>
                     <a href=""><IoSearch className="text-2xl mx-5 group-hover:text-pretty absolute top-1/2 transform -translate-y-1/2  right-3" /></a>
                  </div>
                  
                </li> 
                <li className="relative cursor-pointer group ">
                  <div>
                  <a href=""><FaBorderAll className="text-2xl mx-5 group hover:rotate-180 duration-300"/></a>
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md">
                    <ul className="space-y-2">
                      <li>
                        <a href=""  className="text-gray-500 hover:text-black p-2 hover:bg-blue-200 duration-200 inline-block w-full ">SHIRTS</a><br/>
                        <a href=""  className="text-gray-500 hover:text-black p-2 hover:bg-blue-200 duration-200 inline-block w-full">T-SHIRTS</a><br/>
                        <a href=""  className="text-gray-500 hover:text-black p-2 hover:bg-blue-200 duration-200 inline-block w-full">ATHLEISURES</a><br/>
                        <a href=""  className="text-gray-500 hover:text-black p-2 hover:bg-blue-200 duration-200 inline-block w-full">GYM SUITS</a><br/>
                      </li>
                    </ul>
                  </div>
                  </div>
                </li>      
                <li>                               
                      <a href=""><FaHeart className="text-2xl mx-5"/></a>
                </li>
                <li>   
                   <a href=""><FaCartShopping className='text-2xl mx-5'/></a>
                </li>
                <li>
                   <a href=""><FaUserAlt className="text-2xl mx-5"/></a>
                </li>
            </ul>
          </div>
       </div>   
    </div>
  )
}

export default Nav
