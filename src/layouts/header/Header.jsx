import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Header.module.scss';
import CategoryItemForHeader from '../../components/category/CategoryItemForHeader';
import ShoppingCart from '../../components/shoppingCart/ShoppingCart';

const Header = props => {

    useEffect(() => {

    }, []);

    let UserAction = () => {
        return (
            (props.credentials) ?
                (
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/home">Hi, {props.credentials.user.fullName}</NavLink>
                        </li>
                    </ul>
                )
                : (
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                    </ul>
                )
        )
    }

    return (
        <div className={classes.header}>
            {/* <div className="container"> */}
            <nav className="navbar navbar-expand-lg">
                <NavLink className="navbar-brand" to="/home">Hee Fashion Shop</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item active dropdown">
                            <NavLink className="nav-link" data-toggle="dropdown" to="#" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-th mr-2"></i>Category
                        </NavLink>
                            <div className="dropdown-menu">
                                <div>
                                    <CategoryItemForHeader />
                                </div>
                            </div>
                        </li>
                    </ul>
                    {UserAction()}
                </div>

            </nav>
        </div>
    )
}

const mapStateToProps = state => ({
    credentials: state.user.credentials,
});

export default connect(mapStateToProps)(Header);