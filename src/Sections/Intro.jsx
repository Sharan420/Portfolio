import bgImage from '../Assets/final-bg.mp4'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { useState } from 'react'

const Intro = () => {
  const words = ['Web Developer', 'Student', 'Designer', 'Artist', 'Jedi']
  const [isloaded, setIsLoaded] = useState(true)
  const [text] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 3500,
    typeSpeed: 150,
    deleteSpeed: 80,
  })

  const handleLoad = () => {
    setTimeout(() => {
      setIsLoaded(t => !t)
      console.log('loaded')
    }, 100)
  }

  return (
    <section className="relative ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={
          isloaded
            ? 'absolute z-10 bottom-0 transition-transform ease-in-out left-0 translate-y-[17rem] opacity-0'
            : 'absolute z-10 bottom-0 transition-transform duration-[2000ms] ease-in-out left-0 opacity-100'
        }
      >
        <path
          fill="#174305"
          d="M0,224L48,234.7C96,245,192,267,288,240C384,213,480,139,576,138.7C672,139,768,213,864,250.7C960,288,1056,288,1152,282.7C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="z-0 absolute flex justify-center items-end h-screen flex-col right-4 overflow-hidden">
        <span className="text-[#F8FEF5] text-[40px] font-inconsolata leading-10 font-normal">
          Hello there
        </span>
        <span className="text-[#F8FEF5] text-[128px] font-inconsolata leading-[134px] font-bold">
          I&apos;m Sharan Suri
        </span>
        <span className="mix-blend-color-dodge text-[#FFFF]/[0.45] text-[120px] font-inconsolata leading-[126px] font-black ">
          <span>{text}</span>
          <Cursor cursorStyle="_" cursorBlinking />
        </span>
        <p className="text-[#F8FEF5] font-inconsolata text-2xl font-normal leading-[45px] text-right">
          Engineer with a passion for deconstruction, web experience curation,
          <br />
          and occasional design involvement.
        </p>
      </div>
      <video
        autoPlay
        muted
        loop
        className="z-[-1] h-screen w-screen object-cover "
        onLoadStart={() => {
          handleLoad()
        }}
      >
        <source className="" src={bgImage} type="video/mp4" />
      </video>
    </section>
  )
}

export default Intro
