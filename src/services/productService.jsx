import { restConnector } from './index';
import { GET } from './method';

class ProductService {
    async fetchCategory() {
        try {
            return restConnector({
                url: "/api/v1/categories",
                method: GET,
            })
        } catch (err) {
            console.log(err)
        }

    }

    async fetchProductNewStyle() {
        try {
            return restConnector({
                url: "/api/v1/products/newstyle",
                method: GET,
            })
        } catch (err) {
            console.log(err)
        }
    }

    async fetchProductByID(id) {
        try {
            return restConnector({
                url: `/api/v1/products/${id}`,
                method: GET,
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export default ProductService;