import HomeFeature from "../components/UI/HomeFeature";

const Feature = () => {
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
            <div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <h1 class="display-3 mb-3 animated slideInDown">Features</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-body" href="#">Pages</a></li>
                            <li class="breadcrumb-item text-dark active" aria-current="page">Features</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <HomeFeature list={features}/>
        </>
    )
}
export default Feature;