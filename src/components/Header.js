import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'
const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/Expensify/dashboard" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/Expensify/create" activeClassName="is-active">Create</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
)
const mapDispatchFromProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
export default connect(undefined, mapDispatchFromProps)(Header);