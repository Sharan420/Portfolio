//Imports:
import { createContext, useState, useContext } from 'react'

//Context:
const VideoContext = createContext(null)

//Exports:
export const VideoState = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(0)
  //Return:
  return (
    <VideoContext.Provider value={{ currentTime, setCurrentTime }}>
      {children}
    </VideoContext.Provider>
  )
}
//Exports:
export const useVideoContext = () => useContext(VideoContext)
