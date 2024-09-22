import { Field, Formik } from 'formik';
import React, { useContext, useState } from 'react';
import { Form, Button, Row, Col, Container, FormGroup } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import '../assets/css/Phone.css';
import Context from '../hooks/context/context';
import { ACTION } from '../hooks/context/reducer'; // import constant actions

const Shopping = () => {
    const [value, setValue] = useState('');
    const { state, dispatch } = useContext(Context); // Ensure state and dispatch are correctly pulled from Context

    const initialValues = {
        email: '',
        firstName: '',
        lastName: '',
    };

    const handleSubmit = (values) => {
        console.log('Form submitted:', values, state.cart);
        // You can handle the form submission, for example, by sending it to an API
    };

    // Hàm xử lý khi số lượng thay đổi
    const updateQuantity = (index, quantity) => {
        const newCart = state.cart.map((product, i) =>
            i === index ? { ...product, quantity: Math.max(1, quantity) } : product
        );
        dispatch({ type: ACTION.UPDATE_CART, payload: newCart });
    };

    // Hàm xóa sản phẩm
    const removeProduct = (index) => {
        const newCart = state.cart.filter((_, i) => i !== index);
        dispatch({ type: ACTION.UPDATE_CART, payload: newCart });
    };

    // Tính tổng giá tiền
    const calculateTotal = () => {
        return state.cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    return (
        <>
            <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">Shopping</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <a className="text-body" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="breadcrumb-item">
                                <a className="text-body" href="#">
                                    Pages
                                </a>
                            </li>
                            <li className="breadcrumb-item text-dark active" aria-current="page">
                                Shopping
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <Container className="mt-5">
                <Row>
                    <Col>
                        <h2 className="text-start">Customer Information</h2>
                        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3 text-start">
                                        <Form.Label>Email</Form.Label>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Email address"
                                            className="form-control"
                                        />
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label>First Name</Form.Label>
                                                <Field
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="First name"
                                                    className="form-control"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label>Last Name</Form.Label>
                                                <Field
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Last name"
                                                    className="form-control"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mt-2">
                                        <PhoneInput
                                            international
                                            countryCallingCodeEditable={false}
                                            defaultCountry="VN"
                                            value={value}
                                            onChange={setValue}
                                        />
                                    </Form.Group>

                                    <FormGroup>
                                        <Button variant="primary" type="submit" className="mt-5 w-100">
                                            PROCEED TO NEXT STEP
                                        </Button>
                                    </FormGroup>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                    <Col>
                        <div>
                            <h2 className="text-center mb-4">Your Cart ({state.cart.length} items)</h2>

                            {state.cart.map((product, index) => (
                                <div className="row border-bottom py-3" key={index}>
                                    <div className="col-2">
                                        <img src={product.thumbnail} alt={product.title} className="img-fluid" />
                                    </div>
                                    <div className="col-4">
                                        <p className="fw-bold">{product.title}</p>
                                        <a href="#" className="text-muted">Change</a>
                                    </div>
                                    <div className="col-2 text-end fw-bold">${(product.price || 0).toFixed(2)}</div> {/* Đảm bảo không bị NaN */}
                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <button
                                            className="btn btn-outline-secondary"
                                            onClick={() => updateQuantity(index, product.quantity > 1 ? product.quantity - 1 : 1)} // Không giảm dưới 1
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            className="form-control text-center mx-2"
                                            value={product.quantity || 1}  /* Đảm bảo giá trị không bị null hoặc NaN */
                                            min="1"
                                            onChange={(e) => {
                                                const newQuantity = parseInt(e.target.value);
                                                if (!isNaN(newQuantity) && newQuantity >= 1) {
                                                    updateQuantity(index, newQuantity);
                                                }
                                            }}
                                            style={{ width: '60px' }}
                                        />
                                        <button
                                            className="btn btn-outline-secondary"
                                            onClick={() => updateQuantity(index, product.quantity + 1)} // Tăng số lượng sản phẩm
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="col-2 text-end fw-bold">
                                        ${((product.price || 0) * (product.quantity || 1)).toFixed(2)} {/* Đảm bảo luôn tính giá dựa trên số lượng >= 1 */}
                                    </div>
                                    <div className="col-12 text-end mt-2">
                                        <button
                                            className="btn btn-danger btn-sm remove-item"
                                            onClick={() => removeProduct(index)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <div className="row mt-4">
                                <div className="col-12 d-flex justify-content-end">
                                    <table className="table table-borderless w-50">
                                        <tbody>
                                            <tr>
                                                <td className="text-end"><strong>Subtotal:</strong></td>
                                                <td className="text-end">${calculateTotal()}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-end"><strong>Sales Tax:</strong></td>
                                                <td className="text-end">$0</td>
                                            </tr>
                                            <tr>
                                                <td className="text-end"><strong>Grand Total:</strong></td>
                                                <td className="text-end"><strong>${calculateTotal() + 0}</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12 d-flex justify-content-between align-items-center">
                                    <p className="text-success">
                                        Congrats, you're eligible for <strong>Free Shipping</strong>
                                    </p>
                                    <button className="btn btn-dark btn-lg">Check out</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Shopping;
