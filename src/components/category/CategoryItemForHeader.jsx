import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductService from "../../services/productService";
import { FETCH_CATEGORY } from "../../redux/action/actionType";

const productService = new ProductService();

const CategoryItemForHeader = props => {
    useEffect(() => {
        productService.fetchCategory().then(res => {
            props.dispatch({
                type: FETCH_CATEGORY,
                payload: res.data,
            })
        }).catch(err => {
            console.log(err);
        })
    }, []);

    let renderCategory = () => {
        if (props.category) {
            return props.category.map((categoryItem, index) => {
                return <span className="dropdown-item" key={index}>{categoryItem.categoryName}</span>
            })
        }
    }

    return (
        <div>
            {renderCategory()}
        </div>
    )
}

const mapStateToProps = state => ({
    category: state.category.categoryItem,
});

export default connect(mapStateToProps)(CategoryItemForHeader);