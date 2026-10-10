# Expense Tracker

A simple expense tracker web app where you can add and delete expenses and see your running total.

**Live demo:** https://sayeed-sce.github.io/expense-tracker/

## Features
- Add an expense with a title and amount (today's date is added automatically)
- Delete any expense with one click
- See the total of all expenses update instantly
- Input validation: empty titles and amounts of 0 or less are rejected with an error message

## Built with
- [React](https://react.dev/) (with the `useState` hook)
- JavaScript array methods: `.map`, `.filter`, `.reduce`
- [Vite](https://vite.dev/) for the dev server and build
- Node.js and npm for running the tools
- GitHub Pages for hosting the live demo

## What I learned
- Managing state with `useState` and building controlled form inputs
- Updating state without changing it directly: a new array with `[...expenses, newExpense]` to add and `.filter()` to delete
- Calculating derived values (the total) with `.reduce()` instead of storing them in state
- Validating input with early returns and showing error messages from state

## Run locally
```bash
git clone https://github.com/Sayeed-SCE/expense-tracker.git
cd expense-tracker/client
npm install
npm run dev
```
Then open the link shown in the terminal (usually http://localhost:5173).
