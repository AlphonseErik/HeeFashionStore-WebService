import React from 'react';
import { connect } from 'react-redux';
import classes from './Carousel.module.scss'

const Carousel = props => {

    return (
        <div className={classes.carousel}>
            <img src="/Images/3375ff1c-140c-0400-5b5e-0016a20add02.jpg" alt="Carousel" />
        </div>
    )
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Carousel);
