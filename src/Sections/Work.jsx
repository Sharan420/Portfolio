//Imports:
import Traffix from '../Assets/Traffix1.png'
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
]

//Components:
const Work = () => {
  //State:
  const [currentIndex, setCurrentIndex] = useState(0)

  //Return:
  return (
    <section
      className="relative flex flex-col min-h-[200px] px-[11vw] py-10 bg-background items-center justify-center"
      id="work"
    >
      <h1 className="font-inconsolata text-[3.5rem] text-white font-bold pb-6">
        Projects
      </h1>
      <div className="relative grid grid-cols-9 min-h-[200px] w-3/4 justify-start gap-3">
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
      <div className="flex flex-row gap-8 w-full items-center justify-center mt-12">
        <div
          className="w-48 h-28 bg-secondary rounded-lg"
          onClick={() => {
            setCurrentIndex(0)
            console.log(currentIndex)
          }}
        ></div>
        <div className="w-48 h-28 bg-secondary rounded-lg"></div>
        <div className="w-48 h-28 bg-secondary rounded-lg"></div>
        <div className="w-48 h-28 bg-secondary rounded-lg"></div>
        <div className="w-48 h-28 bg-secondary rounded-lg"></div>
      </div>
    </section>
  )
}

//Exports:
export default Work
