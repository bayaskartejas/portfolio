function Navbar({clicked, setClicked} : MenuProps) {
  return <div> 
    <div className='flex items-center mt-14 h-max mx-8 sm:mx-12 md:mx-20 lg:mx-28'>
        <div className='h-max w-full flex justify-between items-center'>  
            <a href="#Home" className='md:text-2xl lg:text-3xl text-xl cursor-pointer'>Tejas :)</a>
            <div className='z-10 flex items-center lg:hidden'>
                <svg onClick={()=>{setClicked(!clicked)}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                    <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
                </svg>
            </div>
            <div className='z-0  h-full w-max lg:flex hidden cursor-pointer'>
                <div className='md:text-xl lg:text-2xl text-lg lg:mx-6 md:mx-1 hover:underline decoration-slate-700 hover:underline-offset-8'>About</div>
                <div className='md:text-xl lg:text-2xl text-lg lg:mx-6 md:mx-1 hover:underline decoration-slate-700 hover:underline-offset-8'>Experience</div>
                <div className='md:text-xl lg:text-2xl text-lg lg:mx-6 md:mx-1 hover:underline decoration-slate-700 hover:underline-offset-8'>Projects</div>
                <div className='md:text-xl lg:text-2xl text-lg lg:mx-6 md:mx-1 hover:underline decoration-slate-700 hover:underline-offset-8'>Contact</div>
            </div>
        </div>
    </div>
  </div> 

}

export default Navbar