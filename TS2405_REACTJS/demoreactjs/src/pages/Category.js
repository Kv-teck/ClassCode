import { useEffect, useState } from "react";
import Grid from "../components/Products/Grid";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Category = () => {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const getProductsData = async () => {
        const rs = await fetch("https://dummyjson.com/products/category/" + slug);
        const data = await rs.json();
        setProducts(data.products);
    }
    useEffect(() => {
        getProductsData();
    }, [])
    return (
        <>
            <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown text-capitalize">{slug}</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-body" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-dark active text-capitalize" aria-current="page">{slug}</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <Container>
                <h1 className="mt-4 text-capitalize">{slug}</h1>
                <Grid products={products} />
            </Container>
        </>
    )
}
export default Category;