import React, { useEffect, useState } from "react";
import { IExpense } from "../common/interfaces/IExpense";
import ExpenseDetail from "./Expense";
import AddExpense from "./AddExpense";

interface IExpenseState {
  expenses: IExpense[];
  loading: boolean;
}

const ExpenseList: React.FC = () => {
  const date = new Date();
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
  };
  let [expensesState, setExpenses] = useState<IExpenseState>(initialdata);

  return (
    <div className="container">
      <AddExpense />
      {expensesState.expenses.map((expense, i) => {
        return (
          <ExpenseDetail
            id={expense.id}
            date={expense.date}
            amount={expense.amount}
            mode={expense.mode}
          />
        );
      })}
    </div>
  );
};

export default ExpenseList;
