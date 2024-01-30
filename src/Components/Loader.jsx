import startupvid from '../Assets/startup.mp4'
import loopvid from '../Assets/loop.mp4'
import { useVideoContext } from '../Contexts/VideoContext.jsx'
import { useState } from 'react'

const Loader = () => {
  const { currentTime, setCurrentTime } = useVideoContext()
  const [videoEnded, setVideoEnded] = useState(false)

  const handleTimeUpdate = e => {
    setCurrentTime(e.target.currentTime)
    console.log(currentTime)
  }

  return (
    <div className="h-screen w-full relative overflow-hidden -z-1">
      <video
        src={startupvid}
        type="video/mp4"
        autoPlay
        muted
        className={videoEnded ? 'hidden' : 'w-screen object-cover'}
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
        className={videoEnded ? 'w-screen object-cover' : 'hidden'}
      />
    </div>
  )
}

export default Loader
