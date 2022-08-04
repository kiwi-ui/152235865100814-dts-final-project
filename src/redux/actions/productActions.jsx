import React from 'react'
import { ActionTypes } from "../constan/action-type"
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products,
    };
};
