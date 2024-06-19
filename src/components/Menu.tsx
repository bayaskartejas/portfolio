function Menu({clicked, setClicked} : MenuProps) {
  return (
    clicked ? <div className="h-max w-max bg-inherit absolute right-0 z-20 mx-10 sm:mx-12 md:mx-20 lg:hidden border rounded-md px-4 py-4 text-lg">
    <ul className="hover:scale-105 duration-150"><a href="#About" onClick={()=>{setClicked(!clicked)}}>About</a></ul>
    <ul className="hover:scale-105 duration-150"><a href="#Experience" onClick={()=>{setClicked(!clicked)}}>Experience</a></ul>
    <ul className="hover:scale-105 duration-150"><a href="#Projects" onClick={()=>{setClicked(!clicked)}}>Projects</a></ul>
    <ul className="hover:scale-105 duration-150"><a href="#Contact" onClick={()=>{setClicked(!clicked)}}>Contact</a></ul>
  </div> : <></>
    )
}

export default Menu