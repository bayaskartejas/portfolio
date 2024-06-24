import Image7 from "../assets/email.png"
import Image8 from "../assets/linkedin.png" 
function Contact() {
  return <div id="Contact" className="border border-transparent my-16 sm:mt-32 mt-20">
        <div className="text-zinc-600 text-base flex justify-center mt-5 sm:text-sm">Get In Touch</div>
        <div className=" text-black tracking-wide font-semibold text-3xl flex justify-center my-2 sm:text-5xl sm:my-2">Contact Me</div>
        <div className="grid md:mt-48 mt-44">
            <div className="w-max h-max border-2 border-zinc-400 rounded-3xl justify-self-center grid sm:flex py-2">
                <div className="grid sm:flex justify-center items-center px-2">
                    <div className="flex justify-center items-center sm:mx-2">
                        <img src={Image7} alt="" className="h-12 sm:px-2 px-1"/>
                        <div className="sm:text-xl text-sm sm:px-2 px-1 hover:underline decoration-gray-500 hover:underline-off hover:text-zinc-600"><a href="mailto:tejasbayaskar8506@gmail.com">tejasbayaskar8506@gmail.com</a></div>
                    </div>

                    <div className="flex justify-center items-center sm:mx-2">
                        <img src={Image8} alt="" className="h-10 sm:px-2 px-1"/>
                        <div className="sm:text-xl text-sm sm:px-2 px-1 hover:underline decoration-gray-500 hover:underline-off hover:text-zinc-600"><a href="https://www.linkedin.com/in/tejas-bayaskar-a96806228/" target="_blank">LinkedIn</a></div>
                     </div>
                </div>
            </div>
        </div>
        <div className="md:mt-48 mt-44 px-3 text-zinc-700 text-sm justify-self-center text-center lg:text-lg">Copyright © 2024 Tejas Bayaskar. All Rights Reserved.</div>
        <div className="flex justify-end mt-10 mr-7">
            <a href="#Home">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                    <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"></path>
                </svg>
            </a>
        </div>
  </div>
}

export default Contact