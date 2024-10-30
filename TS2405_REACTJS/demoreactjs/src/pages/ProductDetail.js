import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Products/Product";
import { detailProduct } from "../services/apiService";

const ProductDetail = () => {
    const [product,setProduct] = useState({});
    // id
    const {id} = useParams();
    // call api
    const getDetail = async ()=>{
        // const rs = await fetch("https://dummyjson.com/products/"+id);
        // const data = await rs.json();
        // setProduct(data);
       const data = await detailProduct(id);
       setProduct(data);
    }
    // useEffect get data
    useEffect(()=>{
        getDetail();
    },[]);

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
