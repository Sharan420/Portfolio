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
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className={
          isloaded
            ? 'absolute z-10 bottom-0 transition-transform ease-in-out left-0 translate-y-[17rem] opacity-0 scale-y-50'
            : 'absolute z-10 -bottom-[6.5rem] transition-transform duration-[2000ms] ease-in-out left-0 opacity-100 scale-y-50'
        }
      >
        <path
          d="M 0,400 L 0,60 C 57.230769230769255,44.64615384615385 114.46153846153851,29.292307692307695 206,40 C 297.5384615384615,50.707692307692305 423.38461538461536,87.47692307692309 512,87 C 600.6153846153846,86.52307692307691 652,48.8 732,43 C 812,37.2 920.6153846153848,63.32307692307694 1000,65 C 1079.3846153846152,66.67692307692306 1129.5384615384617,43.9076923076923 1198,39 C 1266.4615384615383,34.0923076923077 1353.230769230769,47.04615384615385 1440,60 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#174305"
          fillOpacity="0.265"
        ></path>
        <path
          d="M 0,400 L 0,140 C 100.91538461538462,130.1025641025641 201.83076923076925,120.2051282051282 273,115 C 344.16923076923075,109.7948717948718 385.5923076923077,109.2820512820513 448,118 C 510.4076923076923,126.7179487179487 593.8,144.66666666666666 687,145 C 780.2,145.33333333333334 883.2076923076925,128.05128205128207 963,130 C 1042.7923076923075,131.94871794871793 1099.3692307692306,153.1282051282051 1175,158 C 1250.6307692307694,162.8717948717949 1345.3153846153846,151.43589743589746 1440,140 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#174305"
          fillOpacity="0.4"
        ></path>
        <path
          d="M 0,400 L 0,220 C 67.6974358974359,230.57179487179485 135.3948717948718,241.14358974358973 225,232 C 314.6051282051282,222.85641025641027 426.1179487179487,193.9974358974359 518,197 C 609.8820512820513,200.0025641025641 682.1333333333333,234.86666666666665 748,237 C 813.8666666666667,239.13333333333335 873.3487179487179,208.53589743589743 954,208 C 1034.6512820512821,207.46410256410257 1136.4717948717948,236.9897435897436 1221,244 C 1305.5282051282052,251.0102564102564 1372.7641025641026,235.5051282051282 1440,220 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#174305"
          fillOpacity="0.53"
        ></path>
        <path
          d="M 0,400 L 0,300 C 106.56923076923073,288.4897435897436 213.13846153846146,276.9794871794872 283,287 C 352.86153846153854,297.0205128205128 386.01538461538473,328.57179487179485 457,328 C 527.9846153846153,327.42820512820515 636.7999999999998,294.73333333333335 737,292 C 837.2000000000002,289.26666666666665 928.7846153846156,316.4948717948718 992,321 C 1055.2153846153844,325.5051282051282 1090.0615384615382,307.2871794871795 1160,300 C 1229.9384615384618,292.7128205128205 1334.9692307692308,296.35641025641024 1440,300 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#174305"
          fillOpacity="1"
        ></path>
      </svg>
      {/* <svg
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
      </svg> */}
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
