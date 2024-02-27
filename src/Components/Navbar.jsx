//Imports:
import { useVideoContext } from '../Contexts/VideoContext'
import { useEffect, useState } from 'react'
import { TiThMenu } from 'react-icons/ti'

//Components:
const Navbar = () => {
  //State:
  const { currentTime } = useVideoContext()
  const [showNav, setShowNav] = useState(false)
  const [navStatus, setNavStatus] = useState(false)

  //Effects:
  useEffect(() => {
    if (currentTime >= 4 && !showNav) {
      setShowNav(true)
      console.log('show')
      return
    }
  }, [currentTime, showNav])

  //Return:
  return (
    <nav
      className={
        showNav
          ? 'z-20 absolute pr-8 md:pr-11 py-6 flex justify-end items-center w-full duration-[500ms] ease-in-out'
          : 'z-20 absolute pr-11 py-6 flex justify-end items-center w-full -translate-y-24'
      }
    >
      <div className="hidden md:block md:space-x-8 md:font-inconsolata md:text-white md:text-2xl">
        <a href="#about">01.About</a>
        <a href="#skills">02.Skills</a>
        <a href="#work">03.Work</a>
        <a href="#contact">04.Contact</a>
      </div>
      <div className="mt-4">
        <a className="md:hidden" onClick={() => setNavStatus(e => !e)}>
          <TiThMenu className="text-4xl text-white" />
        </a>
        {navStatus && (
          <button
            className="absolute top-9 right-10 text-white text-3xl z-30 flex items-center"
            onClick={() => setNavStatus(false)}
          >
            &#10005;
          </button>
        )}
        <div
          className={
            navStatus
              ? 'z-20 absolute top-0 right-0 h-screen w-full bg-background flex flex-col items-center justify-center text-white font-inconsolata text-3xl gap-8 transition-all duration-500 ease-in-out'
              : 'z-20 absolute top-0 right-0 h-screen w-full bg-background flex flex-col items-center justify-center text-white font-inconsolata text-3xl gap-8 -translate-x-[100vw] transition-all duration-300 ease-in-out'
          }
        >
          <a href="#about" onClick={() => setNavStatus(false)}>
            01.About
          </a>
          <a href="#skills" onClick={() => setNavStatus(false)}>
            02.Skills
          </a>
          <a href="#workm" onClick={() => setNavStatus(false)}>
            03.Work
          </a>
          <a href="#contact" onClick={() => setNavStatus(false)}>
            04.Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

//Exports:
export default Navbar
