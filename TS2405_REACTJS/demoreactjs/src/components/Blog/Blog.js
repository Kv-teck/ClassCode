import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
    return (
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <img className="img-fluid" src={blog.img} alt="" />
            <div className="bg-light p-4">
                <Link to='' className="d-block h5 lh-base mb-4">{blog.text}</Link>
                <div className="text-muted border-top pt-4">
                    <small className="me-3"><i className="fa fa-user text-primary me-2"></i>{blog.user}</small>
                    <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>{blog.calendar}</small>
                </div>
            </div>
        </div>
    )
}
export default Blog;