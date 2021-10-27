import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

export default function Expenses(props) {
  const expenses = props.items;
  return (
    <Card className="expenses">
      {expenses.map((data) => {
        return (
          <ExpenseItem
            key={data.id}
            title={data.title}
            amount={data.amount}
            date={data.date}
          />
        );
      })}
    </Card>
  );
}
