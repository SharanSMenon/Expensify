import React from 'react';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom'
import moment from 'moment';
import numeral from 'numeral'
const ExpenseListItem = ({ description, amount, createdAt, note, dispatch, id }) => {
    return (
        <div>
            <Link to={`/Expensify/edit/${id}`}><h3>{description}</h3></Link>
            <p>{numeral(amount).format("$0,0.00")} - {moment(createdAt).format("MMMM Do, YYYY")}</p>
            <p>{note}</p>
        </div>
    )
}
export default ExpenseListItem;