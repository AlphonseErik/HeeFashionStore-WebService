import React from 'react';
import { connect } from 'react-redux';

const NotFoundScreen = props => {
    return (
        <div>
            <h1>Not Found Route</h1>
        </div>
    )
}

export default connect()(NotFoundScreen);