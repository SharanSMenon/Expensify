import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.css';
const store = configureStore();
// Water bill
store.dispatch(addExpense({
    description:"Dell",
    amount:179
}))
store.dispatch(addExpense({
    description:"Water bill",
    amount:5000,
    note:"Helo"
}))
// Gas Bill
store.dispatch(addExpense({
    description:"Gas bill",
    amount:45
}))
store.dispatch(addExpense({
    description:"Macbook pro",
    amount:1199
}))
store.dispatch(addExpense({
    description:"HP",
    amount:699
}))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

console.log(store.getState());
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));
