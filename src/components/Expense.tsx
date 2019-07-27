import React from "react"
import { IExpense } from "../common/interfaces/IExpense"

const ExpenseDetail: React.FunctionComponent<IExpense> = expense => {
  return (
    <div className="expense">
      <span>{expense.date.toDateString()}</span>
      <p>{expense.amount}</p>
      <span>{expense.mode}</span>
    </div>
  )
}

export default ExpenseDetail
