import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './Header.module.scss';
import CategoryItemForHeader from '../../components/category/CategoryItemForHeader';
import ShoppingCart from '../../components/cart/shoppingCart/ShoppingCart';
import { Button } from '@material-ui/core';

const Header = props => {

    useEffect(() => {

    }, []);

    const renderApp = () => {
        return (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Button href="/home">Home</Button>
                </li>
                <li className="nav-item active dropdown">
                    <Button component="span" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-th mr-2"></i>Category
                            </Button>
                    <div className="dropdown-menu">
                        <div>
                            <CategoryItemForHeader />
                        </div>
                    </div>
                </li>
            </ul>
        )
    }

    const renderUserAction = () => {
        return (
            (props.credentials) ?
                (
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Button component="span" href="/home">Hi, {props.credentials.user.fullName}</Button>
                        </li>
                    </ul>
                )
                : (
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Button href="/login">Login</Button>
                        </li>
                        <li className="nav-item active">
                            <Button href="/register">Register</Button>
                        </li>
                    </ul>
                )
        )
    }

    const renderShoppingCart = () => {
        return (
            <ul className="navbar-nav">
                <ShoppingCart />
            </ul>
        )
    }

    return (
        <div className={classes.header}>
            {/* <div className="container"> */}
            <nav className="navbar navbar-expand-lg">
                <Button color="primary" href="/home">Hee Fashion Shop</Button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {renderApp()}
                    {renderUserAction()}
                    {renderShoppingCart()}
                </div>

            </nav>
        </div>
    )
}

const mapStateToProps = state => ({
    credentials: state.user.credentials,
});

export default connect(mapStateToProps)(Header);