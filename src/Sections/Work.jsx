//Imports:
import Traffix from '../Assets/Traffix1.png'
import TraffixLogo from '../Assets/Traffix.jpg'
import Crypt from '../Assets/crypt.png'
import CryptLogo from '../Assets/cryptlogo.png'
import { SiNumpy, SiKeras, SiPython } from 'react-icons/si'
import { SlSocialGithub } from 'react-icons/sl'
import { IoIosLink } from 'react-icons/io'
import { useState } from 'react'
//Constants:
const Projects = [
  {
    name: 'Traffix',
    icon: [<SiKeras />, <SiNumpy />, <SiPython />],
    description:
      'Keras is used to optimize traffic light timings by real-time traffic density detection, enhancing urban transportation efficiency and reducing congestion.',
    links: [
      {
        name: 'Github',
        icon: <SlSocialGithub />,
        link: 'https://github.com/Sharan420/Traffic-Classifier',
      },
      {
        name: 'Website',
        icon: <IoIosLink />,
        link: 'https://namanchandok.github.io/Traffic-Classifier/website',
      },
    ],
    Image: Traffix,
  },
  {
    name: 'Crypt@trix',
    icon: [<SiKeras />, <SiNumpy />, <SiPython />],
    description:
      'Keras is used to optimize traffic light timings by real-time traffic density detection, enhancing urban transportation efficiency and reducing congestion.',
    links: [
      {
        name: 'Github',
        icon: <SlSocialGithub />,
        link: 'https://github.com/PyrotechClub/crypt22',
      },
    ],
    Image: Crypt,
  },
]

//Components:
const Work = () => {
  //State:
  const [currentIndex, setCurrentIndex] = useState(0)
  const [transition, setTransition] = useState(false)

  //Functions:
  const handleTransistion = index => {
    setTransition(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setTransition(false)
    }, 500)
  }

  //Return:
  return (
    <section
      className="relative flex flex-col min-h-[200px] px-[11vw] py-10 bg-background items-center justify-center"
      id="work"
    >
      <h1 className="font-inconsolata text-[3.5rem] text-white font-bold pb-6">
        Projects
      </h1>
      <div
        className={
          transition
            ? 'relative grid grid-cols-9 min-h-[200px] w-3/4 justify-start gap-3 opacity-0 transition-opacity duration-300'
            : 'relative grid grid-cols-9 min-h-[200px] w-3/4 justify-start gap-3 opacity-100 transition-opacity duration-300'
        }
      >
        <img
          src={Projects[currentIndex].Image}
          className="rounded-lg aspect-auto w-[38vw] col-start-1 col-span-6 row-start-1"
        />
        <div className="col-start-6 col-span-4 z-20 text-white row-start-1 flex flex-col justify-center items-end w-full gap-2">
          <h2 className="text-4xl font-inconsolata font-bold mr-2">
            {Projects[currentIndex].name}
          </h2>
          <span className="flex flex-row gap-2 mr-2 opacity-50 w-full justify-end items-center">
            <hr className="h-px w-full bg-gray-200 border-0 " />
            {Projects[currentIndex].icon.map((item, index) => {
              return <span key={index}>{item}</span>
            })}
          </span>
          <div className="w-full pl-4 pr-8 py-4 bg-secondary rounded-sm">
            <p className="text-end text-white font-inconsolata">
              {Projects[currentIndex].description}
            </p>
          </div>
          <div className="flex flex-row gap-2 mr-2 opacity-75 mt-4 text-2xl">
            {Projects[currentIndex].links.map((item, index) => {
              return (
                <a href={item.link} key={index}>
                  {item.icon}
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-8 min-h-[100px] w-full items-center justify-center mt-12">
        <div
          className={`w-[20%] h-[15vh] rounded-lg`}
          style={{
            backgroundImage: `url(${TraffixLogo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onClick={() => {
            handleTransistion(0)
            console.log(currentIndex)
          }}
        ></div>
        <div
          className="w-[20%] h-[15vh] rounded-lg"
          style={{
            backgroundImage: `url(${CryptLogo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onClick={() => {
            handleTransistion(1)
            console.log(currentIndex)
          }}
        ></div>
        <div
          className="w-[20%] h-[15vh] bg-secondary rounded-lg"
          onClick={() => {
            handleTransistion(1)
            console.log(currentIndex)
          }}
        ></div>
      </div>
    </section>
  )
}

//Exports:
export default Work
