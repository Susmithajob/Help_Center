const Card = ({card})=>{
    const {title,description} = card;
    return(
        <>
           <div className="bg-gray-200 border-2 border-gray-300 rounded-lg m-4 flex flex-col w-1/4 px-4 py-2 h-40">
             <h2 className="font-bold">{title}</h2>
             <hr className="border-t-2 border-gray-300 -mx-4 my-2" />
             <p>{description}</p>
            </div>

        </>
    )
}

export default Card;