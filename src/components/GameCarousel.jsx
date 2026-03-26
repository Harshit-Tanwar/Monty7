import React from 'react'
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
const GameCarousel = ({title , items}) => {
  return (
    <div className="mb-8">
        <div className="mb-6 flex justify-between mx-4">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="flex gap-1">
            <button className="bg-linear-to-b from-[#E6D39B] to-[#593A1E] border-[#E6D39B] p-1 text-2xl rounded">
              <FiChevronLeft />
            </button>
            <button className="bg-linear-to-b from-[#E6D39B] to-[#593A1E] border-[#E6D39B] p-1 text-2xl rounded-sm">
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="ml-4 inline-flex gap-8">
          {items.map((e) => (
            <div className="w-60 h-60 border-[#E6D39B] border rounded-xl overflow-hidden flex flex-col relative">
               <img src={e.pic} className="w-full h-full bg-cover" alt="" />
               <div className="bg-linear-to-b from-[#E6D39B] to-[#593A1E] absolute w-full bottom-0">
                <h3 className="text-center py-1">{e.name}</h3>
               </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default GameCarousel
