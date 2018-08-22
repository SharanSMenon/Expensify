import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesMessage from './ExpenseMessage'
const ExpenseDashboardPage = () => (
    <div>
        <ExpensesMessage />
        <ExpenseListFilters />
        <ConnectedExpenseList />
    </div>
)
export default ExpenseDashboardPage;