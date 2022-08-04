import React from "react";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom"
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (

            <div
                key={id}
                class="flex-auto max-w-sm bg-white rounded-lg shadow-md border-gray-900"
            >
                <Link to={`/product/${id}`}>
                    <img
                        class="p-8 rounded-t-lg"
                        src={image}
                        alt="product image"
                        style={{ height: "32vh", width: "20vw" }}
                    ></img>
                </Link>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight ">
                            {title}
                        </h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                        {/* <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {rating.rate}
              </span> */}
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold ">
                            ${price}
                        </span>
                        <a
                            href="#"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Add to cart
                        </a>
                    </div>
                </div>
            </div>
        );
    });
    return <>
        <div className="flex flex-wrap gap-4 flex-row justify-around content-around">
            {renderList}
        </div >
    </>;
};

export default ProductComponent;
