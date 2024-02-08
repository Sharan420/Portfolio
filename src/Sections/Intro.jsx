//Imports:
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { useEffect, useState } from 'react'
import { useVideoContext } from '../Contexts/VideoContext'

//Components:
const Intro = () => {
  //Constants:
  const words = ['Web Developer', 'Student', 'Designer', 'Artist', 'Jedi']
  const [text] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 3500,
    typeSpeed: 150,
    deleteSpeed: 80,
  })

  //Context:
  const { currentTime } = useVideoContext()

  //State:
  const [showWave, setShowWave] = useState(false)
  const [showText, setShowText] = useState(false)

  //Effects:
  useEffect(() => {
    if (currentTime >= 4 && !showWave) {
      setShowWave(true)
      console.log('show')
      return
    }
    if (currentTime >= 5.5 && !showText) {
      setShowText(true)
      console.log('show')
      return
    }
  }, [currentTime, showWave, showText])

  //Return:
  return (
    <>
      <section className="absolute w-full h-screen z-10 overflow-hidden">
        <div
          className={
            showText
              ? 'flex flex-col justify-center items-center h-full w-full opacity-100 transition-all duration-700 ease-in-out my-0'
              : 'flex flex-col justify-center items-center h-full w-full opacity-0 -my-10'
          }
        >
          <span className="text-slightoffwhite text-xl md:text-2xl font-inconsolata font-normal leading-tight">
            Hello there
          </span>
          <span className="text-[50px] text-center text-[#F8FEF5] md:text-[100px] font-inconsolata font-bold leading-[70px] md:leading-[90px]">
            I&apos;m Sharan Suri
          </span>
          <span className="text-[#00ffff]/[0.5] text-[45px] md:text-[90px] font-inconsolata font-black leading-tight">
            <span>{text}</span>
            <Cursor cursorStyle="_" cursorBlinking />
          </span>
          <p className="text-slightoffwhite font-inconsolata text-xl px-4 md:px-[21rem] md:text-2xl font-normal text-center md:leading-tight">
            Engineer with a passion for deconstruction, web experience curation,
            and occasional design involvement.
          </p>
          <a href="https://docs.google.com/document/d/10RlsaCpElISN6d7gOOukG1Lk-Lld75PQERIn4MjxKFk/edit?usp=sharing">
            <button className="px-10 py-2 rounded-2xl border-2 border-orange-50 bg-[#66BF40]/[0.15] text-white text-2xl font-inconsolata mt-8 transition duration-200 hover:bg-[#66BF40]/[0.35]">
              Resume
            </button>
          </a>
        </div>
        <div
          className={
            showWave
              ? 'custom-shape-divider-bottom-1706648784 '
              : 'absolute -bottom-[180px] left-0 w-full overflow-hidden leading-7'
          }
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </>
  )
}

//Exports:
export default Intro
