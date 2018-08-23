import React from 'react'
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { Link } from 'react-router-dom'
const ExpenseMessage = ({ expensesCount, expensesTotal }) => {
    const word = expensesCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expensesTotal).format("$0,0.00")
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {word} totaling <span>{formattedExpensesTotal}</span></h1>
                <div>
                    <Link className="button" to="/Expensify/create">Add expense</Link>
                </div>
            </div>
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