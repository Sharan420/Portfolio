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
    }, 1000)
  }

  return (
    <section className="relative overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={
          isloaded
            ? 'absolute z-10 bottom-[-300px] transition-all duration-500 ease-in-out scale-150'
            : 'absolute z-10 bottom-[50px] transition-all duration-1000 ease-in-out scale-150'
        }
      >
        <path
          fill="#174305"
          fill-opacity="1"
          d="M0,192L48,181.3C96,171,192,149,288,144C384,139,480,149,576,170.7C672,192,768,224,864,234.7C960,245,1056,235,1152,224C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="z-0 absolute flex justify-center items-end h-screen flex-col right-4">
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
        className="z-[-1]"
        onLoadStart={() => {
          handleLoad()
        }}
      >
        <source className="h-screen w-screen" src={bgImage} type="video/mp4" />
      </video>
    </section>
  )
}

export default Intro
