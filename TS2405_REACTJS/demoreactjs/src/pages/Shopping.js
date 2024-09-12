import { Field, Formik } from 'formik';
import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, FormGroup } from 'react-bootstrap';

const Shopping = () => {


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
