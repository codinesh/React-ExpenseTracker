import React, { useEffect, useState } from "react"
import { IExpense, IExpenseState } from "../common/interfaces/IExpense"
import ExpenseDetail from "./Expense"
import AddExpense from "./AddExpense"

const ExpenseList: React.FC = () => {
  const date = new Date()
  const initialdata: IExpenseState = {
    expenses: [
      { id: 1, date: date, amount: 98, mode: "QuickRide" },
      {
        id: 2,
        date: new Date(),
        amount: 100,
        mode: "QuickRide"
      }
    ],
    loading: false
  }
  let [expensesState, setExpenses] = useState<IExpenseState>(initialdata)

  const newExpense = (expense: IExpense) => {
    let exp = [expense, ...expensesState.expenses]
    setExpenses({ expenses: exp, loading: true })
  }

  return (
    <div className="container">
      <AddExpense onClick={newExpense} title="Hello AddExpense" />
      {expensesState.expenses.map((expense, i) => {
        return (
          <ExpenseDetail
            id={expense.id}
            date={expense.date}
            amount={expense.amount}
            mode={expense.mode}
          />
        )
      })}
    </div>
  )
}

export default ExpenseList
