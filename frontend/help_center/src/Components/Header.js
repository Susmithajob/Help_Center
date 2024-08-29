const Header = ()=>{
    return(
        <>
          <div className='bg-black w-full h-12 flex flex-wrap justify-between items-center px-5'>
           <div>
             <h3 className="text-white">Abstract | Help Center</h3>
            </div>
            <div>
             <button className="text-white p-1 border rounded-md">Submit a request</button>
            </div>
           </div>
           
      </>
    )
}

export default Header;