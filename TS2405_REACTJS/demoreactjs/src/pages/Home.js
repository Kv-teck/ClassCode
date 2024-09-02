import HomeAbout from "../components/UI/HomeAbout";
import HomeBlog from "../components/UI/HomeBlog";
import HomeCarousel from "../components/UI/HomeCarousel";
import HomeFeature from "../components/UI/HomeFeature";
import HomeFirmVisit from "../components/UI/HomeFirmVisit";
import HomeProduct from "../components/UI/HomeProduct";
import HomeTestimonial from "../components/UI/HomeTestimonial";

const Home = () => {
    const about_me = "CHafisacklew";
    const desc_txt = "fasfjoawjfajsflkajw";
    const fas = [
        "Tempor erat elitr rebum at clita",
        "Aliqu diam amet diam et eos",
        "Clita duo justo magna dolore erat amet",
    ];

    const features = [
        {
            icon:"/img/icon-1.png",
            label:"Natural Process",
            text:"Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
        },
        {
            icon:"/img/icon-2.png",
            label:"Organic Products",
            text:"Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
        },
        {
            icon:"/img/icon-3.png",
            label:"Biologically Safe",
            text:"Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
        },
    ];

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

    const blog = [
        {
            img:"img/blog-1.jpg",
            text:"How to cultivate organic fruits and vegetables in own firm",
            user:"Admin",
            calendar:"01 Jan, 2045",
        },
        {
            img:"img/blog-2.jpg",
            text:"How to cultivate organic fruits and vegetables in own firm",
            user:"Admin",
            calendar:"01 Jan, 2045",
        },
        {
            img:"img/blog-3.jpg",
            text:"How to cultivate organic fruits and vegetables in own firm",
            user:"Admin",
            calendar:"01 Jan, 2045",
        },
    ]

    return (
        <>
            <HomeCarousel />
            <HomeAbout label={about_me} sub_title={desc_txt} list={fas}>Hello world</HomeAbout>
            <HomeFeature list={features}/>
            <HomeProduct products={products}/>
            <HomeFirmVisit />
            <HomeTestimonial />
            <HomeBlog blog={blog}/>
        </>
    )
}
export default Home;