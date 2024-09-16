import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Products/Product";

const ProductDetail = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProductData = async () => {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
        };

        fetchProductData();
    }, []);

    return (
        <>
            <div className="container-fluid page-header">
                <div className="container">
                    <h1 className="display-3 mb-3">{product.title}</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active" aria-current="page">{product.title}</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container">
                <h1 className="mt-4">{product.title}</h1>
                <Product product={product} />
            </div>
        </>
    );
};

export default ProductDetail;
