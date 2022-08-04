import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';
import { setProducts } from '../redux/actions/productActions';
const ProductDetail = () => {
    const { productId } = useParams();
    const products = useSelector((state) => state)
    const { image, title, price, category, description } = products
    const dispatch = useDispatch()
    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("Err", err);
            });
        dispatch(selectedProduct(response.data))
    };
    useEffect(() => {

        fetchProductDetail();

    }, [productId]);
    console.log(products)
    return (
        <>{products !== "" ? (<div className='text-2xl'>I Failed To Call The API For The Detail Product</div>) : (<div className="relative content-center h-screen grid grid-cols-2 gap-3">
            <div className="containertas">
                <img src={image} alt="foto produk" height={'200px'} />
            </div>
            <div className="containerdesc">
                <h1 className="category uppercase text-2xl text-zinc-400">{category}</h1>
                <div className="title text-[3rem]">{title}</div>
                {/* <div className="rating">{product.rating.rate}</div> */}
                <div className="price">{price}</div>
                <div className="description"></div>
                <div className="button">
                    <button type="submit">Add to Cart</button>
                    <button type="submit">Go to Cart</button>
                </div>
            </div>
        </div>)


        }
        </>
    )
}

export default ProductDetail
// import React, { useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     selectedProduct,
//     // removeSelectedProduct,
// } from "../redux/actions/productActions";
// const ProductDetails = () => {
//     const { productId } = useParams();
//     let product = useSelector((state) => state.product);
//     const { image, title, price, category, description } = product;
//     const dispatch = useDispatch();
//     const fetchProductDetail = async (id) => {
//         const response = await axios
//             .get(`https://fakestoreapi.com/products/${id}`)
//             .catch((err) => {
//                 console.log("Err: ", err);
//             });
//         dispatch(selectedProduct(response.data));
//     };

//     useEffect(() => {
//         if (productId && productId !== "") fetchProductDetail(productId);
//         // return () => {
//         //     dispatch(removeSelectedProduct());
//         // };
//     }, [productId]);
//     return (
//         <div className="ui grid container">
//             {Object.keys(product).length === 0 ? (
//                 <div>...Loading</div>
//             ) : (
//                 <div className="ui placeholder segment">
//                     <div className="ui two column stackable center aligned grid">
//                         <div className="ui vertical divider">AND</div>
//                         <div className="middle aligned row">
//                             <div className="column lp">
//                                 <img className="ui fluid image" src={image} />
//                             </div>
//                             <div className="column rp">
//                                 <h1>{title}</h1>
//                                 <h2>
//                                     <a className="ui teal tag label">${price}</a>
//                                 </h2>
//                                 <h3 className="ui brown block header">{category}</h3>
//                                 <p>{description}</p>
//                                 <div className="ui vertical animated button" tabIndex="0">
//                                     <div className="hidden content">
//                                         <i className="shop icon"></i>
//                                     </div>
//                                     <div className="visible content">Add to Cart</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProductDetails;