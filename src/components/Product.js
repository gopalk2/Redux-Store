import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice'
import {useDispatch} from 'react-redux'
function Product() {
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch()


    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const res2 = await res.json()

            console.log(res2)
            setProduct(res2)
        };
        fetchProduct()
    }, [])

    const handleAdd = async (product) => {
        dispatch(add(product))
    }

    return (
        <div className="productsWrapper">
            {product.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>₹ {product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Product