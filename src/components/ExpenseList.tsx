import React, { useEffect, useState } from "react"
import logo from "../assets/logo.svg"
import { IExpense } from "../common/interfaces/IExpense"
import ExpenseDetail from "./Expense"

interface IExpenseState {
  expenses: IExpense[]
  loading: boolean
}

const ExpenseList: React.FC = () => {
  const date = new Date()
  const initialdata: IExpenseState = {
    expenses: [
      { date: date, amount: 98, mode: "QuickRide" },
      {
        date: new Date(),
        amount: 100,
        mode: "QuickRide"
      }
    ],
    loading: false
  }
  let [expenses, setExpenses] = useState<IExpenseState>(initialdata)

  useEffect(() => {
    console.log("ExpenseList useEffect")
    return () => {
      console.log("ExpenseList useEffect cleanup ")
    }
  })

  return (
    <div className="container">
      {expenses.expenses.map((expense, i) => {
        return <ExpenseDetail test={expense} />
      })}
    </div>
  )
}

export default ExpenseList
