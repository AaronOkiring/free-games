
import { useParams } from "react-router"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { MdLaptopWindows } from "react-icons/md";
import { BsBrowserEdge } from "react-icons/bs";

import { VscDebugContinue } from "react-icons/vsc";
import { MdAddBox } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { MdOutlineReviews } from "react-icons/md";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FcLike, FcDislike } from "react-icons/fc";
import { BsFillEmojiNeutralFill } from "react-icons/bs";
import HamburgerMenu from "./HamburgerMenu";




function gameDetails() {
  //const [game, setGame] = useState(null)

  // use the URL to fetch data
  //use useEffect
  // /games?id=gameId

  const [gameDetails, setGameDetails] = useState(null); // Initialize with null for an object
  const params = useParams()
  const gameId = params.gameId;
  useEffect(() => {

    console.log("params", params)
    if (gameId != undefined) {
      const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`


      axios.get(url, {
        headers: {
          'x-rapidapi-key': 'decafcb092msh6a16f07b8444d8cp1f0fd6jsnb6204d8ecefa',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
      })
        .then((res) => setGameDetails(res.data)) // Useing res.data to access the response
        .catch((err) => console.log(err)); // Add error handling
    }
  }, []);
  console.log(gameDetails);

  if (gameDetails === null) {



    return <div>Loading</div>
  }





  return (
    <div className="bg-slate-700 flex flex-wrap ml-1.5  ">
      <nav className="text-2xl  flex content-evenly"><HamburgerMenu /></nav>

      <div className=" lg:flex  lg:gap-25.5 p-2">
        <div className=" ml-7 lg:64  w-81  mt-17 h-118" >
          <img src={gameDetails?.thumbnail} alt={gameDetails?.title} className='aspect-square static transition duration-300 
        ease-in-out hover:scale-102 overflow-hidden max-w-xs'/>
          <div className="    w-80 ml-0 mb-0 h-13 mt-2">
            <button className="bg-gray-500 w-17 ml-2 mt-2 rounded-b-sm mr-2 h-8">FREE</button>
            <button className="bg-blue-300 w-53  rounded-b-sm ml-3 h-8">PLAY NOW  <VscDebugContinue className="inline-block text-29 w-6 pb-0.5" />  </button>
          </div>
          <div className="   ml-2 mb-0 h-22 rounded-2 mt-1"  >
            <div className="  hover:bg-sky-700 text-center bg-cyan-700 cursor-pointer inline-block p-2 w-19 items-center h-20"><FcLike className="w-16 text-20" />1 <br />LIKE </div>
            <div className="  hover:bg-sky-700 text-center bg-cyan-700  inline-block cursor-pointer items-center w-19 p-2 h-20"> <BsFillEmojiNeutralFill className="w-16" />0<br /> MEH</div>
            <div className="  hover:bg-sky-700 text-center bg-cyan-700 inline-block cursor-pointer items-center w-19 p-2 h-20"><FcDislike className="w-16 text-32" />0 DISLIKE</div>
            <div className="  hover:bg-sky-700 text-center bg-cyan-700 inline-block cursor-pointer items-center  w-19 p-2 h-20"> <MdAddBox className="w-16 text-32" />27 <br />ADD</div>
          </div>
          <div className="inline-block text-amber-50"><IoMdContact className="inline-block text-2xl w-5" />Requires 3rd party Account. </div>
        </div>

        <div className=" border-red-300 mr-5 pl-2 mt-17 h-420 lg:w-200 ml-10">
          <div className=" h-80  ">
            <h1 className="mt-3 text-3xl text-red-600"> {gameDetails?.title}</h1>
            <h1 className=" text-2xl inline-block "> <FaStar className="inline-block" />  Massively positive</h1>
            <p className="mt-1 ">1 Member Rating</p>
            <p className="mt-1 inline-block "> <IoIosPerson className="inline-block text-xl " />   35 Members have this game in their library!</p><br />

            <div className="inline-block mb-2 w-50"> <MdOutlineReviews className="inline-block text-xl" /> 0 Reviews</div>
            <div className="inline-block mb-2 w-50"> <FaLongArrowAltUp className="inline-block text-xl" />   5% popularity</div><br />
            <div className="inline-block mb-2  w-80">what do you think about this game!</div>
            <div className="inline-block w-20">
              <h2 className="w-10  text-2xl text-orange-600 cursor-pointer  inline-block"><AiFillLike /></h2>
              <h2 className="w-10 text-2xl text-gray-950 cursor-pointer  inline-block"><AiOutlineDislike /></h2>
            </div><br />
            <input className=" flex h-15 mt-2 ml-2 rounded-xl bg-gray-600 text-amber-50" placeholder="write a review about this game!" />
          </div>
          <div className="w-[300px]">
            <p className="underline mt-2 underline-offset-1">About: {gameDetails?.title}</p><br />
            <p className="text-amber-100 italic "> {gameDetails?.description}</p>
            <p className=" text-amber-50 mt-4 italic">{gameDetails?.short_description}</p><br />
          </div>

          <p className="italic text-sm font-medium">Disclosure:FreeToGame works closely with publishers and decelopers to offer a free and rewarding experience.In order to keep
            everything free to use wemay sometimes earn some commission from some partners.Find more info in our FAQ page.
          </p>
          <h3 className="mt-6 text-2xl underline   underline-offset-2  ">Additional Information</h3>
          <h3 className="mt-1 text-1xl italic">please note these free-to-play-games may or may not offer optional in-game purchases</h3>

          <div className="grid lg:grid-cols-3">
            <h4 className="inline-block">Title:<br />{gameDetails?.title}</h4>
            <h4 className="inline-block">Release date:<br />{gameDetails?.platform}</h4>
            <h4 className="inline-block">Developer:<br />{gameDetails?.developer}</h4>
            <h4 className="inline-block">Genre:<br />{gameDetails?.genre}</h4>
            <h4 className="inline-block">publisher:<br />/{gameDetails?.publisher}</h4>
            <h4 className="inline-block">platform:<br />{gameDetails?.platform}</h4>
          </div>




          <div className="flex flex-col lg:flex-col gap-2">
            <img src={gameDetails?.screenshots[0].image} alt={""} className='aspect-square static transition duration-300 
        ease-in-out hover:scale-102 overflow-hidden max-w-xs'/>
            <img src={gameDetails?.screenshots[1].image} alt={""} className='aspect-square static transition duration-300 
        ease-in-out hover:scale-102 overflow-hidden max-w-xs'/>
            <img src={gameDetails?.screenshots[2].image} alt={""} className='aspect-square static transition duration-300 
        ease-in-out hover:scale-102 overflow-hidden max-w-xs'/>
          </div>

          <h1 className="text-2xl mt-2 text-gray-500">Minimum System Requirements (Windows)</h1>
          <div className="grid lg:w-190 text-cyan-700  lg:grid-cols-3">
            <h4 className="inline-block">Graphics:<br />{gameDetails?.minimum_system_requirements.graphics}</h4>
            <h4 className="inline-block">OS:<br />{gameDetails?.minimum_system_requirements.os}</h4>
            <h4 className="inline-block">Processor:<br />{gameDetails?.minimum_system_requirements.processor}</h4>
            <h4 className="inline-block">Storage:<br />{gameDetails?.minimum_system_requirements.storage}</h4>
            <h4 className="inline-block">Memory:<br />/{gameDetails?.minimum_system_requirements.memory}</h4>

          </div>

          <p className="text-sm mt-4 text-amber-50">
            All material on this page is copyrighted by ©Tencent and their respective licensors.
            All other trademarks are the property of their respective owners.
          </p>
          <h1 className="text-xl mt-3.5 underline underline-offset-1 text-amber-50  ">
            User Reviews
          </h1>
          <p className="inline-block text-sm text-amber-50">
            Play this game and post your review!
          </p>
          <button className="ml-13 hover:bg-sky-700 cursor-pointer  bg-blue-300 text-sm h-7 w-40 rounded-sm">Submit Review</button>



        </div>
      </div>














      <div className="fixed z-50 bottom-0 bg-cyan-800 left-0 right-0 flex-wrap px-2 py-3">
        <div className="mt-3">We use cookies to make our browsing experience better.</div>
        <div>
          <button className=" cursor-pointer border-2 border-amber-50 hover:bg-sky-700 mt-3   w-20 rounded-xl">
            Accept
            </button>
          </div>
        <div>
          <button className=" cursor-pointer border-2 border-amber-50 hover:bg-sky-700 mt-3 rounded-xl">
          learn more</button>
          </div>
      </div>

    </div>
  )
}

export default gameDetails

