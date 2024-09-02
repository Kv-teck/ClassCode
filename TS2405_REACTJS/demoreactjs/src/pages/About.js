import HomeAbout from "../components/UI/HomeAbout";
import HomeFeature from "../components/UI/HomeFeature";
import HomeFirmVisit from "../components/UI/HomeFirmVisit";

const About = () => {
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
    return (
        <>
            <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-body" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-dark active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <HomeAbout label={about_me} sub_title={desc_txt} list={fas}>Hello world</HomeAbout>
            <HomeFirmVisit />
            <HomeFeature list={features}/>
        </>
    );
}
export default About;