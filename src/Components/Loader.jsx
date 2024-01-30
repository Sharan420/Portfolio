import startupvid from '../Assets/startup.mp4'
import loopvid from '../Assets/loop.mp4'
import { useState } from 'react'

const Loader = () => {
  const [videoEnded, setVideoEnded] = useState(false)

  return (
    <div className="h-screen w-screen absolute overflow-hidden -z-1">
      <video
        src={startupvid}
        type="video/mp4"
        autoPlay
        muted
        className={videoEnded ? 'hidden' : 'w-screen object-cover'}
        onEnded={() => {
          setVideoEnded(true)
        }}
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
