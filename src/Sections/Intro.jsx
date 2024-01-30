import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { useEffect, useState } from 'react'
import { useVideoContext } from '../Contexts/VideoContext'

const Intro = () => {
  const words = ['Web Developer', 'Student', 'Designer', 'Artist', 'Jedi']
  const [text] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 3500,
    typeSpeed: 150,
    deleteSpeed: 80,
  })
  const { currentTime } = useVideoContext()
  const [showWave, setShowWave] = useState(false)
  const [showText, setShowText] = useState(false)
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
          <span className="text-[#F8FEF5] text-[25px] font-inconsolat font-normal leading-tight">
            Hello there
          </span>
          <span className="text-[#F8FEF5] text-[100px] font-inconsolata font-bold leading-[90px]">
            I&apos;m Sharan Suri
          </span>
          <span className="mix-blend-color-dodge text-[#00ffff]/[0.5] text-[90px] font-inconsolata font-black leading-tight">
            <span>{text}</span>
            <Cursor cursorStyle="_" cursorBlinking />
          </span>
          <p className="text-[#F8FEF5] font-inconsolata text-2xl font-normal text-center leading-tight">
            Engineer with a passion for deconstruction, web experience curation,
            <br />
            and occasional design involvement.
          </p>
          <button className="px-10 py-2 rounded-2xl border-2 border-orange-50 bg-[#66BF40]/[0.15] text-white text-2xl font-inconsolata mt-8 transition duration-200 hover:bg-[#66BF40]/[0.35]">
            Resume
          </button>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="203"
          viewBox="0 0 1440 203"
          fill="none"
          className={
            showWave
              ? 'absolute -bottom-10 left-0 overflow-hidden w-full scale-x-110 z-10 duration-[500ms] ease-in-out'
              : 'absolute -bottom-[203px] left-0 overflow-hidden w-full scale-x-110 z-10'
          }
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0L48 24.1667C96 48.3333 192 96.6667 288 101.5C384 106.333 480 67.6667 576 62.8333C672 58 768 87 864 101.5C960 116 1056 116 1152 101.5C1248 87 1344 58 1392 43.5L1440 29V203H1392C1344 203 1248 203 1152 203C1056 203 960 203 864 203C768 203 672 203 576 203C480 203 384 203 288 203C192 203 96 203 48 203H0V0Z"
            fill="#058C42"
          />
        </svg>
      </section>
    </>
  )
}

export default Intro
