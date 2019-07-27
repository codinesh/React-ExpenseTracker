import React, { useEffect, useState } from "react"

interface IExpense {
  date: Date
  amount: number
  mode: string
}

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
      {initialdata.expenses.map((expense, i) => {
        return (
          <div className="expense">
            <span>{expense.date.toDateString()}</span>
            <p>{expense.amount}</p>
            <span>{expense.mode}</span>
          </div>
        )
      })}
    </div>
  )
}

export default ExpenseList
