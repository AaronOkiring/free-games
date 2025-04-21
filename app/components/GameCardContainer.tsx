import React, {useEffect, useState} from 'react'
import axios from 'axios';
import GameCard from './GameCard';


function GameCardContainer() {
const [mydata, setmyData] = useState(null); // Initialize with null for an object

useEffect(() => {const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'x-rapidapi-key': 'decafcb092msh6a16f07b8444d8cp1f0fd6jsnb6204d8ecefa',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

axios.request(options)

.then((res) => setmyData(res.data)) // Useing res.data to access the response
.catch((err) => console.log(err)); // Add error handling
}, []);
console.log(mydata);    
  return (
    
    
    <div className=" w-12/12  mt-1 mb-10 mr-4 ml-0 p-4 content-evenly bg-blue-950 space-y-6 px-4">         
      <p className="border-2 grid gap-4 grid-cols-4 border-black-500 min-w-[250px] justify-evenly  min-h-[250px] dark:text-gray-200 text-1.5">
      {mydata !=null && mydata.map((game, idx)=>  <GameCard key={idx} game={game} /> )}  
           
                
      </p>            
    </div> 
        
     
    
  )
}

export default GameCardContainer;
