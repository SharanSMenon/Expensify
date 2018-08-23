import React from 'react';
import { Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFound';
import LoginPage from '../components/LoginPage';
import createStore from 'redux';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
export const history = createHistory();

const AppRouter = () => {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <PublicRoute exact={true} path="/" component={LoginPage}/>
                    <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true} />
                    <PrivateRoute path="/create" component={AddExpensePage} exact={true} />
                    <PrivateRoute path="/edit/:id" component={EditExpensePage} exact={true} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    )
}
export default AppRouter;
