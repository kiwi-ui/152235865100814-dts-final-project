import React, { useEffect, useState } from "react";
import axios from "axios";
// import { icon-cat } from "../assets/icon-category.png";
// import Img1 from "./assets/icon.png"
import { Link } from "react-router-dom";
const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    // let componentMounted = true;
    const filterProduct = (category) => {
        const updatedList = data.filter((x) => x.category === category);
        setFilter(updatedList);
    }
    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products",
        })
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {/* untuk kategori */}

            <div className="flex gap-1 items-center justify-center h-40 py-5 mx-72 bg-red-400">
                {/* <div class="flex ayu;;'ajhgfs[][sds re shd;3lzdlkd/
                ,93456oklytrdvklollogap-1 items-center justify-center h-full bg-slate-100 ">
                    <div className={`shrink mt-5 w-8/12 h-8/12 block border-green-500`}>
                        <img className="block" src={Img1} alt="" style={{ maxHeight: "100%" }} />
                    </div>
                    <div class="cZdsLQ">
                        <div class="C9kwfl">All Product</div>
                    </div>
                </div> */}
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => setFilter(data)}
                >
                    All
                </button>
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => filterProduct("men's clothing")}
                >
                    Men's Clothing
                </button>
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => filterProduct("women's clothing")}
                >
                    Women's Clothing
                </button>
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => filterProduct("electronics")}
                >
                    Jewel
                </button>
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => filterProduct("jewelery")}
                >
                    IT
                </button>
            </div>

            {/* <h1 className='black bg-slate-500'>Products</h1> */}
            {
                loading && (
                    <div>
                        {" "}
                        <h1>Loading...</h1>
                    </div>
                )
            }
            {/* {data.map((product) => (
                <div key={product.id}>
                    <div><img src={product.image} /></div>
                    <div>
                        <h4>{product.title}</h4>
                        <h4>{product.price}</h4>
                        <h4>{product.description}</h4>
                        <h4>{product.category}</h4>
                    </div>
                </div>
            ))} */}

            {/* hasil API yang telah dipanggil tapi belum dikategorikan */}
            <div className="flex flex-wrap gap-4 flex-row justify-around content-around">
                {filter.map((product) => (
                    <div
                        key={product.id}
                        class="flex-auto max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                    >
                        <Link to={`/products/${product.id}`}>
                            <img
                                class="p-8 rounded-t-lg"
                                src={product.image}
                                alt="product image"
                                style={{ height: "250px", width: "250px" }}
                            ></img>
                        </Link>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {product.title.substring(0, 12)}
                                </h5>
                            </a>
                            <div class="flex items-center mt-2.5 mb-5">
                                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                    {product.rating.rate}
                                </span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-2xl font-bold text-gray-900 dark:text-white">
                                    ${product.price}
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
                ))}
            </div>
        </>
    );
};

export default Products;
