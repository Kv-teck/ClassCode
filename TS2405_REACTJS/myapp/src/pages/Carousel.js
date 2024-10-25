import HomeAbout from "../components/UI/HomeAbout";
import HomeBlog from "../components/UI/HomeBlog";
import HomeCarousel from "../components/UI/HomeCarousel";
import HomeFeature from "../components/UI/HomeFeature";
import HomeFirmVisit from "../components/UI/HomeFirmVisit";
import HomeProduct from "../components/UI/HomeProduct";
import HomeTestimonial from "../components/UI/HomeTestimonial";

const Carousel = () => {
    return (
        <>
            <HomeCarousel />
            <HomeAbout />
            <HomeFeature />
            <HomeProduct />
            <HomeFirmVisit />
            <HomeTestimonial />
            <HomeBlog />
        </>
    )
}
export default Carousel;