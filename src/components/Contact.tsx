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
  </div>
}

export default Contact