import React, { useEffect } from "react";
import ExpenseList from "./ExpenseList";

const Home = () => {
  return (
    <>
      <div className="ms-fabric">Expense List</div>
      <ExpenseList />
    </>
  );
};

export default Home;
