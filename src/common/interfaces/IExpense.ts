export interface IExpense {
  id: number
  date: Date
  amount: number
  mode: string
}

export interface IExpenseState {
  expenses: IExpense[]
  loading: boolean
}
