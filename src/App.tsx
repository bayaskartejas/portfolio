import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {
  const [clicked, setClicked] = useState(false)
  return <div onClick={()=>{if (clicked) setClicked(false)}} id="Home" className='font-[Poppins] bg-slate-100 w-full h-max absolute top-0'>
    <Navbar clicked={clicked} setClicked={setClicked}/>
    <Menu clicked={clicked} setClicked={setClicked}/>
    <Home />
    <About/>
    <Experience />
    <Projects />
    <Contact />
  </div>
}

export default App
