import { createContext, useState, useContext } from 'react'

const VideoContext = createContext(null)

export const VideoState = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(0)

  return (
    <VideoContext.Provider value={{ currentTime, setCurrentTime }}>
      {children}
    </VideoContext.Provider>
  )
}

export const useVideoContext = () => useContext(VideoContext)
