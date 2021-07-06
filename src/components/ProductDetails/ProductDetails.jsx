import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';

const ProductDetails = () => {
    const [products, setProducts] = useState(fakeData);
    const {productKey} = useParams();
    const product = products.find((pd)=>pd.key===productKey);
    const {name, price, category, stock} = product;
    return (
        <div>
            <h4>{name}</h4>
            <p>Category: {category}</p>
            <p>${price}</p>
            <p>available: {stock}</p>
        </div>
    );
};

export default ProductDetails;