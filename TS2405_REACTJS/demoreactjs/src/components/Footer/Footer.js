import './../../assets/css/Footer.css';
const Footer = () => {
    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="social-icons mb-3">
                            <a href="#" className="me-2"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="me-2"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="me-2"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="me-2"><i className="bi bi-google"></i></a>
                            <a href="#"><i className="bi bi-youtube"></i></a>
                        </div>
                        <div className="nav-links mb-3">
                            <a href="#" className="me-3">Home</a>
                            <a href="#" className="me-3">News</a>
                            <a href="#" className="me-3">About</a>
                            <a href="#" className="me-3">Contact Us</a>
                            <a href="#">Our Team</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;