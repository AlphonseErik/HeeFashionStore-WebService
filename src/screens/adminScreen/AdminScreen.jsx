import React from 'react';
import OrderService from '../../services/orderService';
import { FETCH_ALL_ORDERS } from '../../redux/action/actionType';

// const orderService = new OrderService();

const AdminScreen = props => {

    // React.useEffect(() => {
    //     orderService.getAll().then(res => {
    //         props.dispatch({
    //             type: FETCH_ALL_ORDERS,
    //             payload: res.data,
    //         })
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // })

    return (
        <div>
            <h1>Admin Screen</h1>
        </div>
    )
}

export default AdminScreen;