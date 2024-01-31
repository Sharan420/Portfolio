import { useVideoContext } from '../Contexts/VideoContext'
import { useEffect, useState } from 'react'
import { TiThMenu } from 'react-icons/ti'

const Navbar = () => {
  const { currentTime } = useVideoContext()
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    if (currentTime >= 4 && !showNav) {
      setShowNav(true)
      console.log('show')
      return
    }
  }, [currentTime, showNav])

  return (
    <nav
      className={
        showNav
          ? 'z-20 absolute pr-11 py-6 flex justify-end items-center w-full duration-[500ms] ease-in-out'
          : 'z-20 absolute pr-11 py-6 flex justify-end items-center w-full -translate-y-24'
      }
    >
      <div className="hidden md:block md:space-x-8 md:font-inconsolata md:text-white md:text-2xl">
        <a href="#about">01.About</a>
        <a href="#">02.Work</a>
        <a href="#">03.Contact</a>
      </div>
      <a className="md:hidden mt-4">
        <TiThMenu className="text-4xl text-white" />
      </a>
    </nav>
  )
}

export default Navbar
