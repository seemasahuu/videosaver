import React from 'react'
import { IoChevronBackOutline } from "react-icons/io5";
import { HiSave } from "react-icons/hi";
import { IoShareSocial } from "react-icons/io5";

const Videoviewpage = () => {
  return (
    <>
    <div className=' flex   h-16' style={{background:'linear-gradient(90deg, rgba(235,152,22,1) 0%, rgba(253,29,29,1) 50%, rgba(10,16,101,1) 100%)'}}> 
    <IoChevronBackOutline className='h-16 w-6 text-white mx-1' />
    <div className="flex gap-6 ml-auto mr-4">
    <HiSave className='h-16 w-6 text-white ' />
    <IoShareSocial className=' h-16 w-6 text-white ' />
    </div>
    </div>
    <div className='flex flex-col  items-center'>
     <div
     className="h-40 w-80   mt-28 rounded-md"
     style={{ border: "solid 1px gray" }}
   >
     </div>
     <button
            className="h-12 w-64 mt-8 rounded-md text-white"
            style={{
              background:
                "linear-gradient(90deg, rgba(235,152,22,1) 0%, rgba(253,29,29,1) 50%, rgba(10,16,101,1) 100%)",
            }}
          >
            Download Video
          </button>
          </div>
     </>
  )
}

export default Videoviewpage