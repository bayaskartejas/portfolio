import Image1 from "../assets/DSC_0208 (2).jpg"
function Home() {
  return <div className="w-full h-max md:mt-20 sm:mt-14 mt-20 sm:flex sm:justify-center">
    <div className="w-full flex justify-center sm:flex-none sm:w-max sm:mx-10">
        <img src={Image1} alt="" className= "h-56 w-56 sm:h-52 sm:w-52 md:h-72 md:w-72 lg:h-96 lg:w-96 rounded-full"/>
    </div>
    <div className="content-center sm:mx-10">
        <div className="text-zinc-600 tracking-wider font-semibold text-base flex justify-center mt-5 sm:mt-0 lg:text-2xl">Hello, I'm</div>
        <div className=" text-black tracking-wider font-semibold text-3xl flex justify-center my-2 lg:text-5xl lg:my-5 hover:scale-105 duration-100">Tejas Bayaskar</div>
        <div className="text-zinc-600 tracking-wider font-semibold text-lg flex justify-center mt-2 lg:text-3xl">Full-stack Developer</div>
        <div className="w-full mt-5 lg:mt-11 flex justify-center h-11">
            <a href="https://drive.google.com/file/d/1501iCIoV7oVfkS3YQp8RSehD6-UZodQI/view?usp=drive_link" target="blank"><button className="h-full w-32 mx-3 border-2 border-black rounded-3xl duration-100 hover:bg-zinc-800 hover:text-white">Résumé</button></a>
            <button className="h-full w-32 mx-3 border-2 border-transparent rounded-3xl duration-100 hover:bg-black bg-zinc-800 text-white"><a href="#Contact">Contact</a></button>
        </div>
        <div className="flex justify-center sm:mt-7 mt-4 items-center">
            <a target="_blank" href="https://www.linkedin.com/in/tejas-bayaskar-a96806228/">
                <svg className="hover:scale-110 duration-100 mx-2 h-8 w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
            </a>
            <a target="_blank" href="https://www.instagram.com/bayaskartejas/">
                <svg className="hover:scale-110 duration-100 mx-2 h-8 w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
            </a>
            <a target="_blank" href="https://github.com/bayaskartejas">
                <svg className="hover:scale-110 duration-100 mx-2 h-8 w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 30 30">
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
            </a>
            <a target="_blank" href="https://x.com/bayaskartejas1">
                <svg className="hover:scale-110 duration-100 mx-2 h-8 w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                </svg>
            </a>
            <a target="_blank" href="https://www.youtube.com/@tejasbayaskar2570">
                <svg className="hover:scale-110 duration-100 mx-2 h-8 w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                    <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
                </svg>
            </a>
        </div>
    </div>

  </div>
}

export default Home