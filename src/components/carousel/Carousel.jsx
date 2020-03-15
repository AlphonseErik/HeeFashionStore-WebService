import React from 'react';
import { connect } from 'react-redux';
import './Carousel.module.scss'

const Carousel = props => {

    return (
        <div className="carousel">
                <img src="https://cdn2.yame.vn/cimg/images/3375ff1c-140c-0400-5b5e-0016a20add02.jpg" alt="Carousel" />
        </div>
    )
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Carousel);
