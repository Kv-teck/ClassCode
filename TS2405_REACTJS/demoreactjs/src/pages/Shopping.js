import { Field, Formik } from 'formik';
import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, FormGroup } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input'
import '../assets/css/Phone.css'

const Shopping = () => {
    const [value, setValue] = useState('');

    return (
        <>
            <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">Shopping</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-body" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-dark active" aria-current="page">Shopping</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <Container className="mt-5">
                <Row>
                    <Col>
                        <h2 className="text-start">Customer Information</h2>
                        <Formik>
                            <Form>
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
                                                name="fullname"
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
                                                name="fullname"
                                                placeholder="Last name"
                                                className="form-control"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className=" mt-2">
                                    <PhoneInput
                                        international
                                        countryCallingCodeEditable={false}
                                        defaultCountry="RU"
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
                        </Formik>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Shopping;
