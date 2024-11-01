import Grid from "../Blog/Grid";

const HomeBlog = ({ blog }) => {
    return (
        <div class="container-xxl py-6">
            <div class="container">
                <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                    <h1 class="display-5 mb-3">Latest Blog</h1>
                    <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <Grid blog={blog} />
            </div>
        </div>
    );
}
export default HomeBlog;