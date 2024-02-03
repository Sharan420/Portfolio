//Imports:
import startupvid from '../Assets/startup.mp4'
import loopvid from '../Assets/loop.mp4'
import { useVideoContext } from '../Contexts/VideoContext.jsx'
import { useState } from 'react'

//Components:
const Loader = () => {
  //Context:
  const { currentTime, setCurrentTime } = useVideoContext()

  //State:
  const [videoEnded, setVideoEnded] = useState(false)

  //Functions:
  const handleTimeUpdate = e => {
    setCurrentTime(e.target.currentTime)
  }

  //Return:
  return (
    <div className="h-screen w-full relative overflow-hidden -z-1">
      <video
        src={startupvid}
        type="video/mp4"
        autoPlay
        muted
        className={
          videoEnded ? 'hidden' : 'h-screen w-screen object-cover aspect-video'
        }
        onEnded={() => {
          setVideoEnded(true)
        }}
        onTimeUpdate={handleTimeUpdate}
      />
      <video
        src={loopvid}
        type="video/mp4"
        autoPlay
        muted
        loop
        className={
          videoEnded ? 'h-screen w-screen object-cover aspect-video' : 'hidden'
        }
      />
    </div>
  )
}

//Exports:
export default Loader
