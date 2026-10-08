import { useState } from 'react'

const initialExpenses = [
  { id: 1, title: 'Coffee', amount: 4.5, date: '2026-10-05' },
  { id: 2, title: 'Lunch', amount: 12, date: '2026-10-05' },
  { id: 3, title: 'Bus pass', amount: 30, date: '2026-10-04' },
]

function App() {
  const [expenses, setExpenses] = useState(initialExpenses)
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')

  function handleSubmit(e) {
    e.preventDefault() // stop the browser from reloading the page

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount), // inputs give strings, so convert to number
      date: new Date().toISOString().slice(0, 10),
    }
    setExpenses([...expenses, newExpense]) // new array, no push
    setTitle('')
    setAmount('')
  }

  function handleDelete(id) {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <div>
      <h1>Expense Tracker</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.title}: $${expense.amount.toFixed(2)} on ${expense.date}
            
            <button onClick={() => handleDelete(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Total:${total.toFixed(2)}</p>
    </div>
  )
}

export default App 