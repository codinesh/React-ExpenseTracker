import React from "react";
import { IExpense } from "../common/interfaces/IExpense";

const ExpenseDetail: React.FunctionComponent<IExpense> = ({
  date,
  amount,
  mode
}) => {
  return (
    <div className="ms-Fabric expense">
      <span>{date.toDateString()}</span>
      <p>{amount}</p>
      <span>{mode}</span>
    </div>
  );
};

export default ExpenseDetail;
