import React from 'react';
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Groceries",
      amount: 76.54,
      date: new Date(2024, 1, 14),
    },
    { id: "e2", title: "Rent", amount: 1200.0, date: new Date(2024, 0, 1) },
    {
      id: "e3",
      title: "Utility Bill",
      amount: 89.32,
      date: new Date(2024, 2, 25),
    },
    {
      id: "e4",
      title: "Gym Membership",
      amount: 45.0,
      date: new Date(2024, 3, 10),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      />
    </div>
  );
}

export default App;
 