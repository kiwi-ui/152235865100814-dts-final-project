import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions"
const ProductListing = () => {
    const products = useSelector((state) => state);
    //menggunakan dispatch 
    const dispatch = useDispatch();
    // const { id, title } = product;
    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err", err);
            });
        dispatch(setProducts(response.data));
    };
    useEffect(() => {
        fetchProducts()

    }, []);
    console.log(products)

    return (
        <div>
            <ProductComponent />
        </div>
    );
};

export default ProductListing;
