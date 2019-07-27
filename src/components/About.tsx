import React, { useEffect } from "react"

const About = () => {
  useEffect(() => {
    console.log("About useEffect")
    return () => {
      console.log("About useEffect cleanup ")
    }
  })
  return <div>About</div>
}

export default About
