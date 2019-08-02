import { IExpenseState, IExpense } from "./interfaces/IExpense"
import { useState } from "react"

export const ExpensesProvider = (props: IExpenseState) => {
  const [expensesState, setExpensesState] = useState(props)

  const AddExpense = (expense: IExpense) => {
    setExpensesState({
      expenses: [...expensesState.expenses, expense],
      loading: true
    })
  }

  const GetExpenses = () => expensesState.expenses

  return {
    AddExpense,
    GetExpenses
  }
}
