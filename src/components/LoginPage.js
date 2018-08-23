import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth'

export const LoginPage = ({startLogin}) => {
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify</h1>
                <p>It is time to get your expenses under control</p>
                <button className="button" onClick={startLogin}><i class="fab fa-google"></i></button>
                {/* <button className="button" onClick={startLogin}><i class="fab fa-facebook"></i></button>
                <button className="button" onClick={startLogin}><i class="fab fa-twitter"></i></button>
                <button className="button" onClick={startLogin}><i class="fab fa-github"></i></button> */}
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    startLogin:() => dispatch(startLogin())
})
export default connect(undefined, mapDispatchToProps)(LoginPage)