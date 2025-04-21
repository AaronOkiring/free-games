import { FaPlusCircle } from "react-icons/fa";
import { MdLaptopWindows } from "react-icons/md";
import { BsBrowserEdge } from "react-icons/bs";



function GameCard({game}) {
  return (
    <div >
      <div className='relative'>
        <a href={`/game/${game.id}`}>
        <img src={game.thumbnail} alt={game.title} className='static transition duration-300 
        ease-in-out hover:scale-102 overflow-hidden max-w-xs'/>
        <FaPlusCircle className='absolute bottom-0 left-0 bg-blue-500 w-6 h-5 p-.7 rounded-xs'  />
        </a>
     
      </div>
       
      <h1 className='text-sm text-amber-50 mt-2 mb-2'>{game.title}</h1>   
      <div >
      {game.platform ==='PC (Windows)' && <MdLaptopWindows className='w-8' />}
      {game.platform ==='Web Browser' && <BsBrowserEdge className='w-8' />}
      </div> 
      
      
    </div>
  )
}

export default GameCard
