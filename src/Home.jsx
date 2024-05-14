// import React from 'react'
// import { CgMenuLeft } from "react-icons/cg";
// import { TbAdCircleOff } from "react-icons/tb";
// import { IoMdShare } from "react-icons/io";

// const Home = () => {
//   return (
//     <>
//  <nav className=" flex h-14 bg-green-800 py-3 px-5 ">
//         <CgMenuLeft className='h-8 w-10 text-white' />
//        <h3 className='text-white px-4 py-1'>Status Saver</h3>
//        <TbAdCircleOff  className='h-5 w-8 my-2 text-white ' />
//        <IoMdShare  className=' h-5 w-8 my-2 text-white ' />
//       </nav>
//     </>

//   )
// }
// export default Home

import React from "react";
import { CgMenuLeft } from "react-icons/cg";
import { TbAdCircleOff } from "react-icons/tb";
import { IoMdShare } from "react-icons/io";
import img1 from "./Assests/facebook.png"
import img2 from "./Assests/whatsapp.png"
import img3 from "./Assests/instagram.png"
import img4 from "./Assests/snapchat.png"
import img5 from "./Assests/diskette.png"
import img6 from "./Assests/link.png"
import img7 from "./Assests/delete.png"
import img8 from "./Assests/rate.png"
import { Link} from "react-router-dom";

const Home = () => {
   

  return (
    <>
      <nav className="flex h-16 bg-green-800 ">
        <CgMenuLeft className="h-8 w-10 my-4 mx-2 text-white" />
        <h3 className="text-white px-1 py-5">Status Saver</h3>

        <div className="ml-auto flex items-center">
          <div className="mx-2">
            <TbAdCircleOff className="h-6 w-8 my-2 text-white" />
          </div>

          <div className="mx-2">
            <IoMdShare className="h-6 w-8 my-2 text-white" />
          </div>
        </div>
      </nav>

      <div class="flex flex-wrap-reverse  justify-evenly my-10 ">

   
        <div className="flex items-center flex-col justify-center gap-3 h-32 w-32 bg-white rounded-xl">
        <img className="h-16" src={img1} alt="img1"/>
        <h3 className="text-sm">For Facbook</h3>
        </div>
     

        <div className="flex items-center flex-col justify-center gap-3 h-32 w-32  bg-white rounded-xl">
        <img className="h-16" src={img2} alt="img2"/>
        <h3 className="text-sm">For WhatsApp</h3>
          </div>
      
      </div>

      <div class="flex flex-wrap-reverse  justify-evenly my-10">
<Link to="/Saver" >
        <div className="flex items-center flex-col justify-center gap-3 h-32 w-32 bg-white rounded-xl"> 
        <img className="h-16" src={img3} alt="img3"/>
        <h3 className="text-sm">For Instagram</h3>
        </div>
        </Link>
        <div className="flex items-center flex-col justify-center gap-3 h-32 w-32 bg-white rounded-xl">
        <img className="h-16" src={img4} alt="img4"/>
        <h3 className="text-sm">For Snapchat</h3>
         </div>
      </div>

      <div class="flex flex-wrap-reverse  justify-evenly  my-10">
        <div className="flex items-center flex-col justify-center h-32 w-32 bg-white rounded-xl">
        <img className="h-16" src={img5} alt="img5"/>
        <h3 className="text-sm">Save Files</h3>
          </div>

        <div className="flex items-center flex-col justify-center gap-3 h-32 w-32 bg-white rounded-xl">
        <img className="h-16" src={img6} alt="img6"/>
        <h3 className="text-sm">Form Link</h3>
        </div>
      </div>

      <div class="flex flex-wrap-reverse  justify-evenly my-10">
        <div className="flex items-center flex-col justify-center gap-3 h-32 w-32 bg-white rounded-xl">
        <img className="h-16" src={img7} alt="img7"/>
        <h3 className="text-sm">Deleted</h3>
        </div>

        <div className="flex items-center flex-col justify-center gap-3 h-32 w-32 bg-white rounded-xl">
        <img className="h-16" src={img8} alt="img8"/>
        <h3 className="text-sm">Rate us</h3>
        </div>

      </div>
    </>
  );
};

export default Home;
