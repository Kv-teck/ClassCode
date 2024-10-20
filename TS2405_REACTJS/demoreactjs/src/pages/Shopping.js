import { Field, Formik } from 'formik';
import React, { useContext, useState } from 'react';
import { Form, Button, Row, Col, Container, FormGroup, Badge, InputGroup, Table } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import '../assets/css/Phone.css';
import Context from '../hooks/context/context';
import { Link } from 'react-router-dom';
// import { ACTION } from '../hooks/context/reducer'; // import constant actions

const Shopping = () => {
    const [value, setValue] = useState('');
    // const {state,dispatch} = useContext(Context);
    const cart = [];
    // const cart = state.cart;
    var total = 0;
    const removeItem = (id) => {
        var new_cart = [];
        cart.map(item => {
            if (item.id != id)
                new_cart.push(item);
        })
        // dispatch({type: ACTION.UPDATE_CART,payload: new_cart});
        // dispatch({type: ACTION.SHOW_LOADING});
        // setTimeout(()=>{
        //     dispatch({type: ACTION.HIDE_LOADING})
        // },1000);
    }
    const incrementQty = (id) => {
        // cart.map(item=>{
        //     if(item.id == id)
        //         item.buy_qty = item.buy_qty +1;
        //     return item;
        // })
        // dispatch({type: ACTION.UPDATE_CART,payload: cart});
        // dispatch({type: ACTION.SHOW_LOADING});
        // setTimeout(()=>{
        //     dispatch({type: ACTION.HIDE_LOADING})
        // },1000);
    }
    const decrementQty = (id) => {
        // cart.map(item=>{
        //     if(item.id == id)
        //         item.buy_qty = item.buy_qty > 1?item.buy_qty - 1: 1; 
        //     return item;
        // })
        // dispatch({type: ACTION.UPDATE_CART,payload: cart});
        // dispatch({type: ACTION.SHOW_LOADING});
        // setTimeout(()=>{
        //     dispatch({type: ACTION.HIDE_LOADING})
        // },1000);
    }

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
                        <Formik>
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
                        <div class="col-lg-12 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                            <Table striped bordered hover>
                                <thead>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </thead>
                                <tbody>
                                    {
                                        cart.map((item, key) => {
                                            total += item.price * item.buy_qty;
                                            return <tr key={key}>
                                                <td>
                                                    <Row>
                                                        <Col><img src={item.thumbnail} width={80} /></Col>
                                                        <Col>{item.title}</Col>
                                                    </Row>

                                                </td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Text onClick={() => decrementQty(item.id)}>-</InputGroup.Text>
                                                        <input style={{ width: 10 }} type="number" className="form-control" value={item.buy_qty} />
                                                        <InputGroup.Text onClick={() => incrementQty(item.id)}>+</InputGroup.Text>
                                                    </InputGroup>
                                                </td>
                                                <td>{(item.buy_qty * item.price).toFixed(2)} <Badge onClick={() => removeItem(item.id)} bg="dark">x</Badge></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                        <Col lg={8}></Col>
                        <Col>
                            <h4>Subtotal: ${total.toFixed(2)}</h4>
                            <hr />
                            <h4>Tax: ${(total * 0.1).toFixed(2)}</h4>
                            <hr />
                            <h4>Grand total: <span>${(total * 1.1).toFixed(2)}</span></h4>
                            <div className="mt-3">
                                <Link to="/checkout" className="btn btn-primary">Checkout</Link>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Shopping;
