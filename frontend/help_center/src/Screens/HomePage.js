import { Link } from "react-router-dom";
import Card from "../Components/Card";
import Footer from "../Components/Footer"
import Header from "../Components/Header"

import { useEffect, useState } from "react";
import  Axios  from "axios";

const HomePage = ()=>{
    const [cards,setCards] = useState([]);
    const [searchText,setSearchText] = useState('')
    const [searchCards,setSearchCards] = useState([]);
    const getCard =async () => {
        
        try {
        const response = await Axios.get(`http://localhost:5000/api/cards`)
           setCards(response.data);
           setSearchCards(response.data);
        } catch (error) {
            console.error(error);
            
        }
      }

      const handleSearch = async () => {
            try {
                
              const response = await Axios.get(`http://localhost:5000/api/cards/${searchText}`)
                 const result = response.data;
                 if(result===null)
                 {setSearchCards([]) }
                 else{setSearchCards([result]) }
              } catch (error) {
                  console.error(error);    
              } 
      }


    useEffect(()=>{
        getCard();
    },[]);


    return(
        <>
         <Header/>
         <div className="flex flex-col items-center justify-center    w-full h-60 bg-gray-200">
              <div><h3 className="text-5xl">How can we help?</h3></div>
              <input className="w-1/3 my-4 h-7 p-2 border border-gray-400" placeholder="Search" onChange={(e) => { setSearchText(e.target.value) }}></input>
              <button className="bg-black text-white p-2 rounded-lg  hover:bg-gray-600 border-2 border-black" onClick={handleSearch}>Search</button>
              <button className="bg-black text-white p-2 rounded-lg m-4   hover:bg-gray-600 border-2 border-black" ><Link to="/cards">Add New Card</Link></button>
          </div>
        
          <div className="flex flex-wrap justify-evenly mt-8 mb-20">
           {searchCards.length === 0 ? (<h2 className="text-xl mt-4">No Record Found</h2>) : (searchCards.map((card, index) => (<Card key={index} card={card} />))
           )}
          </div>
         <Footer/>
        </>
    )
}
export default HomePage;