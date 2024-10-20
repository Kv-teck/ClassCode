import HomeBlog from "../components/UI/HomeBlog";

const Blog = () => {
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
        {
            img: "img/blog-1.jpg",
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
        {
            img: "img/blog-1.jpg",
            text: "How to cultivate organic fruits and vegetables in own firm",
            user: "Admin",
            calendar: "01 Jan, 2045",
        },        {
            img: "img/blog-2.jpg",
            text: "How to cultivate organic fruits and vegetables in own firm",
            user: "Admin",
            calendar: "01 Jan, 2045",
        },
    ]

    return (
        <>
            <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">Blog Grid</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-body" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-dark active" aria-current="page">Blog Grid</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <HomeBlog blog={blog} />
        </>
    )
}
export default Blog;