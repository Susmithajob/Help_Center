import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Axios from 'axios';

const AddCard =()=>{
    const navigate = useNavigate();
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('')
    const createCard =  async (e) => {
        e.preventDefault();
        console.log(title,description)
        try{
          await Axios.post('http://localhost:5000/api/cards', {
            title,
            description
          });
         
          navigate(`/`);

        }catch (error) {
          console.error(error);
          alert('Failed to add card');
      } 
      }

    return(
        <>
        <Header />
         <h1 className="text-3xl font-bold my-4 text-center">Add Card</h1>
         <div className="w-1/3 p-4 bg-gray-200 border-2 border-gray-500 rounded-lg flex flex-col mx-auto mb-20">
            <form onSubmit={createCard}>
                <label className="w-full font-semibold my-2 text-xl">Title</label>
                <input className="w-full my-2 rounded-md h-7 p-2" placeholder="Title of the Card" type="text" onChange={(e) => { setTitle(e.target.value) }}></input>
                <label className="w-full font-semibold my-2 text-xl">Description</label>
                <textarea className="w-full my-2 rounded-md  p-2" placeholder="Description" type="text" onChange={(e) => { setDescription(e.target.value) }}></textarea>
                <div className="flex justify-center mt-4">
                        <button className="p-2 border-white border-2 rounded-md bg-black text-white hover:bg-gray-500 hover:text-black" type="submit">Add</button>
                </div>
            </form>
           
            
         </div>
         
         
         
         <Footer />
          
        </>
    )
}

export default AddCard;