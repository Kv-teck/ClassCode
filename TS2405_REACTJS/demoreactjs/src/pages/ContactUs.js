import HomeContact from "../components/UI/HomeContact";
import HomeGGmap from "../components/UI/HomeGGmap";

const ContactUs = () => {
    return (
        <>
            <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">Contact Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-body" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-dark active" aria-current="page">Contact Us</li>
                        </ol>
                    </nav>
                </div>
            </div>

        <HomeContact/>
        <HomeGGmap/>
        </>
    )
}
export default ContactUs;