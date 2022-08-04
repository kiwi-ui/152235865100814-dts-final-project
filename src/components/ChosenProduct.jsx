import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const ChosenProduct = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        axios({
            method: "GET",
            url: `https://fakestoreapi.com/products/${id}`,
        })
            .then((res) => {
                console.log(res.product);
                setProduct(res.product);
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }, []);



    const Loading = () => {
        return (
            <>
                Loading..
            </>
        )
    }

    const ShowProduct = () => {
        const [first, setfirst] = useState([])

        return (
            <>
                <div className="relative content-center h-screen grid grid-cols-2 gap-3">
                    <div className="containertas">
                        <img src={product.image} alt="foto produk" height={'200px'} />
                    </div>
                    <div className="containerdesc">
                        <h1 className="category uppercase text-2xl text-zinc-400">{product.category}</h1>
                        <div className="title text-[3rem]">{product.title}</div>
                        <div className="rating">{product.rating.rate}</div>
                        <div className="price">{product.price}</div>
                        <div className="description"></div>
                        <div className="button">
                            <button type="submit">Add to Cart</button>
                            <button type="submit">Go to Cart</button>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    return (
        <>
            <div className="isi">
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </>

    )
}

export default ChosenProduct 