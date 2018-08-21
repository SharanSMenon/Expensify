import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFound';
import createStore from 'redux';
const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact={true} path="/Expensify" render={() => (<Redirect to="/dashboard"/>)}/>
                    <Route exact={true} path="/" render={() => (<Redirect to="/dashboard"/>)}/>
                    <Route path="/dashboard" component={ExpenseDashboardPage} exact={true} />
                    <Route path="/create" component={AddExpensePage} exact={true} />
                    <Route path="/edit/:id" component={EditExpensePage} exact={true} />
                    <Route path="/help" component={HelpPage} exact={true} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default AppRouter;
