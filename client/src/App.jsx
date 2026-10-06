const expenses = [
  { id: 1, title: 'Coffee', amount: 4.5, date: '2026-10-05' },
  { id: 2, title: 'Lunch', amount: 12, date: '2026-10-05' },
  { id: 3, title: 'Bus pass', amount: 30, date: '2026-10-04' },
]

function App() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.title}: ${expense.amount.toFixed(2)} on {expense.date}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App