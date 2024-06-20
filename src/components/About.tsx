import Image2 from "../assets/IMG_20240620_100430.jpg"
import Image3 from "../assets/image2.png"
import Image4 from "../assets/image.png"
function About() {
  return <div id="About" className="border border-transparent my-16 sm:mt-32 mt-52">
    <div className="text-zinc-600 text-base flex justify-center mt-5 sm:text-sm">Get to know more</div>
    <div className=" text-black tracking-wide font-semibold text-3xl flex justify-center my-2 sm:text-5xl sm:my-2">About Me</div>
    <div className="grid md:flex lg:justify-around xl:mt-10 xl:justify-center">
        <img src={Image2} alt="" className="w-36 h-36 justify-self-center self-center rounded-3xl mt-7 md:h-60 md:w-60 lg:h-80 lg:w-80 lg:mx-16 xl:h-96 xl:w-96" />
        <div className="grid my-3 lg:mr-16 xl:w-min">
            <div className="md:flex justify-self-center w-max">
                <div className="w-60 h-36 border-2 border-zinc-400 my-3 justify-self-center rounded-3xl grid md:mr-2 lg:mr-6 xl:w-80 xl:h-44 xl:mr-8">
                    <div className="self-center grid">
                        <img src={Image3} alt=""  className="w-8 h-8 justify-self-center"/>
                        <div className="justify-self-center font-bold tracking-wider text-lg">Experience</div>
                        <div className="justify-self-center tracking-wide text-base text-zinc-600">1 Year</div>
                        <div className="justify-self-center tracking-wide text-base text-zinc-600">Full-stack Development</div>
                    </div>
                </div>
                <div className="w-60 h-36 border-2 border-zinc-400 my-3 justify-self-center rounded-3xl grid md:ml-2 lg:ml-6 xl:w-80 xl:h-44">
                    <div className="self-center grid">
                            <img src={Image4} alt=""  className="w-8 h-8 justify-self-center"/>
                            <div className="justify-self-center font-bold tracking-wider text-lg">Education</div>
                            <div className="justify-self-center tracking-wide text-base text-zinc-600">B.E. Bachelor's Degree</div>
                            <div className="justify-self-center tracking-wide text-base text-zinc-600">Computer Science</div>
                    </div>
                </div>
            </div>
            <div className="p-5 text-zinc-700">I am a passionate web developer with a keen interest in creating intuitive user experiences. With expertise in React and Javascript/Typescript, I love solving complex problems and continuously learning new technologies. I have a remarkable expertise in backend applications. In my free time, I enjoy watching movies, reading, and writing.</div>
        </div>
    </div>
  </div>
}
export default About