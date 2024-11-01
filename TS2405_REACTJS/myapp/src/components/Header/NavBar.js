import { Link } from "react-router-dom";
import TopLink from "./TopLink";

const NavBar = () => {
    return (
        <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
            <TopLink/>
            <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <Link to="/" className="navbar-brand ms-4 ms-lg-0">
                    <h1 className="fw-bold text-primary m-0">F<span className="text-secondary">oo</span>dy</h1>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about-us" className="nav-item nav-link">About Us</Link>
                        <Link to="/product" className="nav-item nav-link">Products</Link>
                        <div className="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <Link to="/blog" className="dropdown-item">Blog Grid</Link>
                                <Link to="/out-features" className="dropdown-item">Our Features</Link>
                                <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                                <Link to="" className="dropdown-item">404 Page</Link>
                            </div>
                        </div>
                        <Link to="/contact-us" className="nav-item nav-link">Contact Us</Link>
                    </div>
                    <div className="d-none d-lg-flex ms-2">
                        <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                            <small className="fa fa-search text-body"></small>
                        </a>
                        <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                            <small className="fa fa-user text-body"></small>
                        </a>
                        <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                            <small className="fa fa-shopping-bag text-body"></small>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;