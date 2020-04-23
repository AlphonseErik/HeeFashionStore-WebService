import { restConnector } from "../../services";
import { ORDER_DELETE_PRODUCT, DELETED_FROM_CART } from "./actionType";
import reduxAction from "./action";


export const orderAction = (order, userid, history) => {
    return dispatch => {
        try {
            console.log(order, userid, history)
            restConnector({
                headers: {
                    userid
                },
                method: "POST",
                url: "/api/v1/orders",
                data: {
                    orderDetail: {
                        details: order
                    },
                },
            }).then(res => {
                console.log(res.data);
                let response = res.data;
                if (response.status === "SUCCESS") {
                    dispatch(reduxAction(DELETED_FROM_CART, res.data))
                    history.push('./home')
                    return alert('ORDER SUCCESS');
                }
                alert('ORDER FALSE');
            }).catch(err => {
                console.log(err);
                alert('Error: ' + err)
            })
        } catch (err) {
            console.log(err)
        }
    }
}