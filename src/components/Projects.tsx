import Image6 from "../assets/blogbook.png"
function Projects() {
  return <div className="border border-transparent my-16 sm:mt-32 mt-40" id='Projects'>
    <div className="text-zinc-600 text-base flex justify-center mt-5 sm:text-sm">Browse My Recent</div>
    <div className=" text-black tracking-wide font-semibold text-3xl flex justify-center my-2 sm:text-5xl sm:my-2">Projects</div>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-7 sm:mt-20 sm:px-20">
        <div className="h-max w-max sm:w-96 border-2 border-zinc-400 rounded-3xl justify-self-center grid px-8 py-8 my-5 lg:my-0">
            <img src={Image6} alt="" className="rounded-3xl border-2 h-44 w-44 sm:h-auto sm:w-auto justify-self-center"/>
            <div className="mt-4 sm:text-2xl font-semibold tracking-wide justify-self-center text-xl">Blogbook</div>
            <div className="flex mt-4">
                <button className="sm:h-12 sm:w-32 h-12 w-28 sm:mx-3 border-2 border-zinc-400 rounded-3xl duration-100 hover:bg-zinc-800 hover:text-white">Github</button>
                <button className="sm:h-12 sm:w-32 h-12 w-28 sm:mx-3 border-2 border-transparent rounded-3xl duration-100 hover:bg-black bg-zinc-800 text-white">Web link</button>
            </div>
        </div>

        <div className="h-max w-max sm:w-96 border-2 border-zinc-400 rounded-3xl justify-self-center grid px-8 py-8 my-5 lg:my-0">
            <img src={Image6} alt="" className="rounded-3xl border-2 h-44 w-44 sm:h-auto sm:w-auto justify-self-center"/>
            <div className="mt-4 sm:text-2xl font-semibold tracking-wide justify-self-center text-xl">Blogbook</div>
            <div className="flex mt-4">
                <button className="sm:h-12 sm:w-32 h-12 w-28 sm:mx-3 border-2 border-zinc-400 rounded-3xl duration-100 hover:bg-zinc-800 hover:text-white">Github</button>
                <button className="sm:h-12 sm:w-32 h-12 w-28 sm:mx-3 border-2 border-transparent rounded-3xl duration-100 hover:bg-black bg-zinc-800 text-white">Web link</button>
            </div>
        </div>

        <div className="h-max w-max sm:w-96 border-2 border-zinc-400 rounded-3xl justify-self-center grid px-8 py-8 my-5 lg:my-0">
            <img src={Image6} alt="" className="rounded-3xl border-2 h-44 w-44 sm:h-auto sm:w-auto justify-self-center"/>
            <div className="mt-4 sm:text-2xl font-semibold tracking-wide justify-self-center text-xl">Blogbook</div>
            <div className="flex mt-4">
                <button className="sm:h-12 sm:w-32 h-12 w-28 sm:mx-3 border-2 border-zinc-400 rounded-3xl duration-100 hover:bg-zinc-800 hover:text-white">Github</button>
                <button className="sm:h-12 sm:w-32 h-12 w-28 sm:mx-3 border-2 border-transparent rounded-3xl duration-100 hover:bg-black bg-zinc-800 text-white">Web link</button>
            </div>
        </div>
    </div>
  </div>
}

export default Projects