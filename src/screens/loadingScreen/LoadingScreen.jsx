import React from 'react'
import { connect } from 'react-redux';
import classes from "./LoadingScreen.module.scss"

const LoadingScreen = props => {
    return (
        <div className={classes.isLoading}>
            <img align="center" src="/Images/Loading1.svg" alt="Loading Photo"/>
        </div>
    )
}

export default connect()(LoadingScreen);
