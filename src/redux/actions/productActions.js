import { getProducts } from "../../api.js";
const SET_PRODUCTS = "SET_PRODUCTS";

const actionCreator = (type, payload) => {
    
    if (payload) {
        return {type, payload}
    } else {
        return {type}
    }

}

export const setProductsAction = (products) => actionCreator(SET_PRODUCTS, products);


export const getProductsThunk = () => {
    return async (dispatch, getState) => {
        await getProducts().then(( data ) =>
          dispatch(setProductsAction(data))
        );
    }
}