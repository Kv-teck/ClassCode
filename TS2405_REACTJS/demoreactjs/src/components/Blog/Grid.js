import Blog from "./Blog";

const Grid = ({ blog }) => {
    return (
        <div class="row g-4">

                {
                    blog.map((item, key) => {
                        return <Blog key={key} blog={item} />
                    })
                }
            <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                <a class="btn btn-primary rounded-pill py-3 px-5" href="">Load More</a>
            </div>
        </div>

    )
}
export default Grid;