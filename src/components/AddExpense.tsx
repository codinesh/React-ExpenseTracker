import React, { useState } from "react";
import { PrimaryButton, TextField } from "office-ui-fabric-react";
import { IExpense } from "../common/interfaces/IExpense";

interface IProps {
  onClick: (expense: IExpense) => void;
  title: string;
}

const AddExpense: React.FC<IProps> = props => {
  return (
    <div
      className="addexpense"
      onClick={() =>
        props.onClick({ id: 0, amount: 90, date: new Date(), mode: "New" })
      }
    >
      Add new expense...
      <TextField type="" label="Expense" placeholder="Please enter text here" />
      <TextField label="With an icon" iconProps={{ iconName: "Calendar" }} />
    </div>
  );
};

export default AddExpense;
