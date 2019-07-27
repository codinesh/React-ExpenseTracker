import React, { useEffect } from "react"
import ExpenseList from "./ExpenseList"

const Home = () => {
  useEffect(() => {
    console.log("Home useEffect")
    return () => {
      console.log("Home useEffect cleanup ")
    }
  })

  return (
    <>
      <div>This is Home.</div>
      <ExpenseList />
    </>
  )
}

export default Home
