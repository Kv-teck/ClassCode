import HomeFirmVisit from "../components/UI/HomeFirmVisit";
import HomeProduct from "../components/UI/HomeProduct";
import HomeTestimonial from "../components/UI/HomeTestimonial";

const Product = () => {
    const products =[
        {
            img:"img/product-1.jpg",
            name:"Fresh Tomato",
            old_price: "19.00",
            price: "29.00",
        },
        {
            img:"img/product-2.jpg",
            name:"Fresh Tomato",
            old_price: "19.00",
            price: "29.00",
        },
        {
            img:"img/product-3.jpg",
            name:"Fresh Tomato",
            old_price: "19.00",
            price: "29.00",
        },
        {
            img:"img/product-4.jpg",
            name:"Fresh Tomato",
            old_price: "19.00",
            price: "29.00",
        },
        {
            img:"img/product-5.jpg",
            name:"Fresh Tomato",
            old_price: "19.00",
            price: "29.00",
        },
        {
            img:"img/product-6.jpg",
            name:"Fresh Tomato",
            old_price: "19.00",
            price: "29.00",
        },
        {
            img:"img/product-7.jpg",
            name:"Fresh Tomato",
            old_price: "19.00",
            price: "29.00",
        },
        {
            img:"img/product-8.jpg",
            name:"Fresh Tomato",
            old_price: "19.00",
            price: "29.00",
        },
    ];


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

            <HomeProduct products={products}/>
            <HomeFirmVisit />
            <HomeTestimonial />
        </>
    )
}
export default Product;