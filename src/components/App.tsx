import React, { useEffect } from "react"
import Header from "./Header"
import Routes from "./Routes"

const App: React.FC = () => {
  useEffect(() => {
    console.log("App useEffect")
    return () => {
      console.log("App useEffect cleanup ")
    }
  })

  return (
    <>
      <Header title="Dinesh" />
      <Routes />
    </>
  )
}

export default App
