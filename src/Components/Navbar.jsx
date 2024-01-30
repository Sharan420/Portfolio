import { useVideoContext } from '../Contexts/VideoContext'
import { useEffect, useState } from 'react'

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
          ? 'z-20 absolute pr-11 py-6 flex justify-end items-center w-full duration-[500ms] ease-out'
          : 'z-20 absolute pr-11 py-6 flex justify-end items-center w-full -translate-y-24'
      }
    >
      <div className="space-x-8 font-inconsolata text-white text-2xl">
        <a href="#about">01.About</a>
        <a href="#">02.Work</a>
        <a href="#">03.Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
