import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductService from "../../services/productService";
import { FETCH_CATEGORY } from "../../redux/action/actionType";
import { Button } from "@material-ui/core";
import LoadingScreen from "../../screens/loadingScreen/loadingScreen";

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
                return (
                    <Button color="primary" className="dropdown-item" key={index}
                        href={`/products/getbycategory/${categoryItem.categoryName}`}>
                        {categoryItem.categoryName}
                    </Button>
                )
            })
        }
        return (
            <Button color="primary" className="dropdown-item" size={"small"}>
                <LoadingScreen />
            </Button>
        )
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