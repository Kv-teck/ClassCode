import { useEffect, useState } from "react";
import HomeAbout from "../components/UI/HomeAbout";
import HomeBlog from "../components/UI/HomeBlog";
import HomeCarousel from "../components/UI/HomeCarousel";
import HomeFeature from "../components/UI/HomeFeature";
import HomeFirmVisit from "../components/UI/HomeFirmVisit";
import HomeProduct from "../components/UI/HomeProduct";
import HomeTestimonial from "../components/UI/HomeTestimonial";

const Home = () => {
    const about_me = "Best Organic Fruits And Vegetables";
    const desc_txt = "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet";
    const fas = [
        "Tempor erat elitr rebum at clita",
        "Aliqu diam amet diam et eos",
        "Clita duo justo magna dolore erat amet",
    ];

    const features = [
        {
            icon: "/img/icon-1.png",
            label: "Natural Process",
            text: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
        },
        {
            icon: "/img/icon-2.png",
            label: "Organic Products",
            text: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
        },
        {
            icon: "/img/icon-3.png",
            label: "Biologically Safe",
            text: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
        },
    ];

    const blog = [
        {
            img: "img/blog-1.jpg",
            text: "How to cultivate organic fruits and vegetables in own firm",
            user: "Admin",
            calendar: "01 Jan, 2045",
        },
        {
            img: "img/blog-2.jpg",
            text: "How to cultivate organic fruits and vegetables in own firm",
            user: "Admin",
            calendar: "01 Jan, 2045",
        },
        {
            img: "img/blog-3.jpg",
            text: "How to cultivate organic fruits and vegetables in own firm",
            user: "Admin",
            calendar: "01 Jan, 2045",
        },
    ]

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
            <button className="btn btn-primary" onClick={changeX}>Change X: {x}</button>
            <button className="btn btn-primary" onClick={changeY}>Change Y: {y}</button>
            <HomeCarousel />
            <HomeAbout label={about_me} sub_title={desc_txt} list={fas}>Hello world</HomeAbout>
            <HomeFeature list={features} />
            <HomeProduct products={products} />
            <HomeFirmVisit />
            <HomeTestimonial />
            <HomeBlog blog={blog} />
        </>
    )
}
export default Home;