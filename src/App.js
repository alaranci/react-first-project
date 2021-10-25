import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Persija's Uniform",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "This is the data that i using manual inserting",
      amount: 1928,
      date: new Date(2017, 8, 29),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>ini adalah react pertama arayra</p>
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
    </div>
  );
}

export default App;
