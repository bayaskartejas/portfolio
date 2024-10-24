import blogbook from "../assets/blogbook.png"
import Image9 from "../assets/arrow.png"
import aptidote from "../assets/aptidote.png"
import tipnex from "../assets/tipnex.png"
function Projects() {
  return <div className="border border-transparent my-16 sm:mt-32 mt-40" id='Projects'>
    <div className="text-zinc-600 text-base flex justify-center mt-5 sm:text-sm">Browse My Recent</div>
    <div className=" text-black tracking-wide font-semibold text-3xl flex justify-center my-2 sm:text-5xl sm:my-2">Projects</div>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-7 sm:mt-12 sm:px-20">

        <div className="h-max w-max sm:w-96 border-2 border-zinc-400 rounded-3xl justify-self-center grid px-8 py-8 my-5 lg:my-0">
            <img src={tipnex} alt="" className="rounded-3xl border-2 h-44 w-44 sm:h-auto sm:w-auto justify-self-center"/>
            <div className="mt-4 sm:text-2xl font-semibold tracking-wide justify-self-center text-xl">Tipnex</div>
            <div className="flex mt-4">
                <a href="https://github.com/bayaskartejas/tipping-platform"><button className="sm:h-12 sm:w-32 h-12 w-28 sm:mx-3 border-2 border-zinc-400 rounded-3xl duration-100 hover:bg-zinc-800 hover:text-white">Github</button></a>
                <a href="https://tipnex.com/" target="blank"><button className="sm:h-12 sm:w-32 h-12 w-28 sm:mx-3 border-2 border-transparent rounded-3xl duration-100 hover:bg-black bg-zinc-800 text-white">Web link</button></a>
            </div>
        </div>
        <div className="h-max w-max sm:w-96 border-2 border-zinc-400 rounded-3xl justify-self-center grid px-8 py-8 my-5 lg:my-0">
            <img src={aptidote } alt="" className="rounded-3xl border-2 h-44 w-44 sm:h-auto sm:w-auto justify-self-center"/>
            <div className="mt-4 sm:text-2xl font-semibold tracking-wide justify-self-center text-xl">Aptidote</div>
            <div className="flex mt-4">
                <a href="https://github.com/bayaskartejas/mock-test-app"><button className="sm:h-12 sm:w-32 h-12 w-28 sm:mx-3 border-2 border-zinc-400 rounded-3xl duration-100 hover:bg-zinc-800 hover:text-white">Github</button></a>
                <a href="https://aptidote.vercel.app/" target="blank"><button className="sm:h-12 sm:w-32 h-12 w-28 sm:mx-3 border-2 border-transparent rounded-3xl duration-100 hover:bg-black bg-zinc-800 text-white">Web link</button></a>
            </div>
        </div>
   
        <div className="h-max w-max sm:w-96 border-2 border-zinc-400 rounded-3xl justify-self-center grid px-8 py-8 my-5 lg:my-0">
            <img src={blogbook} alt="" className="rounded-3xl border-2 h-44 w-44 sm:h-auto sm:w-auto justify-self-center"/>
            <div className="mt-4 sm:text-2xl font-semibold tracking-wide justify-self-center text-xl">Blogbook</div>
            <div className="flex mt-4">
                <a href="https://github.com/bayaskartejas/blogbook"><button className="sm:h-12 sm:w-32 h-12 w-28 sm:mx-3 border-2 border-zinc-400 rounded-3xl duration-100 hover:bg-zinc-800 hover:text-white">Github</button></a>
                <a href="https://blogbook.vercel.app/" target="blank"><button className="sm:h-12 sm:w-32 h-12 w-28 sm:mx-3 border-2 border-transparent rounded-3xl duration-100 hover:bg-black bg-zinc-800 text-white">Web link</button></a>
            </div>
        </div>

    </div>
    <div className="flex justify-end mt-10 mr-7">
        <a href="#Contact"><img src={Image9} alt="" className="h-10 w-10 hover:scale-110 duration-100"/></a>
    </div>
  </div>
}

export default Projects