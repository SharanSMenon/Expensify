import React from 'react'
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
const ExpenseMessage = ({ expensesCount, expensesTotal }) => {
    const word = expensesCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expensesTotal).format("$0,0.00")
    return (
        <div>
            <h1>Viewing {expensesCount} {word} totaling {formattedExpensesTotal}</h1>
        </div>
    )
}
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}
export default connect(mapStateToProps)(ExpenseMessage);