import { Link } from "react-router-dom";
import Context from "../../hooks/context/context";
import { useContext, } from "react";
import { ACTION } from "../../hooks/context/reducer";


const Product = ({ product }) => {
    const { state, dispatch } = useContext(Context);
    const addToCart = () => {
        var cart = state.cart; // array
        //kiểm tra sản phẩm đã có hay chưa
        var check = false;
        cart.map(e => {
            if (e.id == product.id) {
                check = true;
                e.buy_qty = e.buy_qty + 1;
            }
            return e;
        })
        if (check == false) {
            product.buy_qty = 1;
            cart.push(product);
        }
        // lấy product đưa vào trong cart của global state
        // setState({ ...state, cart: cart });
        dispatch({type: ACTION.UPDATE_CART, payload: cart})
    }

    return (
        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                    <img className="img-fluid w-100" src={product.thumbnail} alt="" />
                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                </div>
                <div className="text-center p-4">
                    <a className="d-block h5 mb-2" href="">{product.title}</a>
                    <span className="text-primary me-1">${product.price}</span>
                    <span className="text-body text-decoration-line-through">${product.old_price}</span>
                </div>
                <div className="d-flex border-top">
                    <small className="w-50 text-center border-end py-2">
                        <Link to={"/product/" + product.id} className="text-body"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                    </small>
                    <small className="w-50 text-center py-2">
                        <Link to={""} onClick={addToCart} className="text-body" type="button"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                    </small>
                </div>
            </div>
        </div>
    )
}
export default Product;