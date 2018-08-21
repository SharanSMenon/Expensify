import React from 'react';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom'
const ExpenseListItem = ({ description, amount, createdAt, note, dispatch, id }) => {
    return (
        <div>
            <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
            <p>{amount} - {createdAt}</p>
            <p>{note}</p>
        </div>
    )
}
export default ExpenseListItem;