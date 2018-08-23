import "babel-polyfill"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import { firebase } from './firebase/firebase'
import 'normalize.css/normalize.css';
import './styles/styles.css';
import LoadingPage from './components/LoadingPage';
const store = configureStore();
// Water bill

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

console.log(store.getState());
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
}
ReactDOM.render(<LoadingPage />, document.getElementById('root'));
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/Expensify') {
                history.push('/Expensify/dashboard')
            }
        })
    } else {
        store.dispatch(logout());
        renderApp()
        history.push('/Expensify');
    }
})