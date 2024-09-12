import { useEffect, useState } from "react";
import HomeFirmVisit from "../components/UI/HomeFirmVisit";
import HomeProduct from "../components/UI/HomeProduct";
import HomeTestimonial from "../components/UI/HomeTestimonial";

const Product = () => {
    const [products, setProducts] = useState([]);
    const getProductsData = async () => {
        const rs = await fetch("https://dummyjson.com/products?limit=12&sortBy=price&order=asc");
        const data = await rs.json();
        setProducts(data.products);
    }
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    useEffect(() => { // nhiệm vụ: lắng nghe sự thay đổi của state và hành động
        getProductsData();
    }, []); // componentDidmount -> chỉ chạy 1 lần duy nhất sau khi build xong giao diện lần đầu
    useEffect(() => {
        console.log("x=" + x);
    }, [x]); // lắng nghe sự thay đổi của x --- trigger
    useEffect(() => {
        console.log("y=" + y);
    }, [y]);
    const changeX = () => { setX(x + 1) }
    const changeY = () => { setY(y + 1) }


    return (
        <>
            <div class="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <h1 class="display-3 mb-3 animated slideInDown">Products</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-body" href="#">Pages</a></li>
                            <li class="breadcrumb-item text-dark active" aria-current="page">Products</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <button className="btn btn-primary" onClick={changeX}>Change X: {x}</button>
            <button className="btn btn-primary" onClick={changeY}>Change Y: {y}</button>
            <HomeProduct products={products} />
            <HomeFirmVisit />
            <HomeTestimonial />
        </>
    )
}
export default Product;