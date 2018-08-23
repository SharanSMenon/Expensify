import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'
const Header = ({ startLogout }) => (
    <header>
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/Expensify/dashboard" exact={true}>
                    <h1>Expensify</h1>
                </Link>
                <button class="button" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
)
const mapDispatchFromProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
export default connect(undefined, mapDispatchFromProps)(Header);