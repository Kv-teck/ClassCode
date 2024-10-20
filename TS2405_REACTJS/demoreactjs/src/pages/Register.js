import { ErrorMessage, Field, Formik, } from "formik";
import { useState } from "react";
import { Button, Col, Container, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import * as Yup from 'yup';

const Regsiter = () => {
    const [submitting, setSubmitting] = useState(false);
    const validationSchema = Yup.object({
        fullname: Yup.string()
            .min(6, "Độ dài tối thiểu là 6")
            .required("vui lòng nhập thông tin"),
        email: Yup.string()
            .email("Vui lòng nhập đúng email")
            .required("vui lòng nhập thông tin"),
        password: Yup.string()
            .min(6, "Độ dài tối thiểu là 6")
            .required("vui lòng nhập thông tin"),
        country: Yup.string()
            .required("Vui lòng chọn quốc gia"),
        states: Yup.string()
            .required("Vui lòng chọn tiểu bang"),
        city: Yup.string()
            .required("Vui lòng nhập tên thành phố"),
        zipcode: Yup.string()
            .matches(/^\d{5}$/, "Mã bưu chính phải có chính xác 5 chữ số")
            .required("Mã bưu chính là bắt buộc"),
    });
    const values = {
        fullname: '',
        email: '',
        password: '',
        country: '',
        states: '',
        city: '',
        zipcode: '',
    };
    const formsubmit = () => {
        setSubmitting(true);
    };

    const country = [
        { label: 'United States', value: 'US' },
        { label: 'Canada', value: 'CA' },
        { label: 'United Kingdom', value: 'UK' },
        { label: 'Australia', value: 'AU' },
        { label: 'Vietnam', value: 'VN' },
        { label: 'India', value: 'IN' },
        { label: 'Germany', value: 'DE' },
    ];
    const states = [
        { label: 'California', value: 'CA' },
        { label: 'New York', value: 'NY' },
        { label: 'Texas', value: 'TX' },
        { label: 'Florida', value: 'FL' },
        { label: 'Washington', value: 'WA' },
    ];

    return (
        <>
            <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">Regsiter</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-body" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-dark active" aria-current="page">Regsiter</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <h1>Regsiter</h1>
                        <Formik initialValues={values}
                            validationSchema={validationSchema}
                            onSubmit={formsubmit}>
                            <Form>
                                <FormGroup className="mb-3 text-start">
                                    <FormLabel>Fullname</FormLabel>
                                    <Field type="text" name="fullname" className="form-control" />
                                    <ErrorMessage name="fullname" component='p' style={{ color: 'red' }} />
                                </FormGroup>
                                <FormGroup className="mb-3 text-start">
                                    <FormLabel>Email</FormLabel>
                                    <Field type="text" name="email" className="form-control" />
                                    <ErrorMessage name="email" component='p' style={{ color: 'red' }} />
                                </FormGroup>
                                <FormGroup className="mb-3 text-start">
                                    <FormLabel>Password</FormLabel>
                                    <Field type="text" name="password" className="form-control" />
                                    <ErrorMessage name="password" component='p' style={{ color: 'red' }} />
                                </FormGroup>

                                <FormGroup className="mb-3 text-start">
                                    <FormLabel>Country</FormLabel>
                                    <Field as="select" name="country" className="form-control">
                                        {country.map((country, index) => (
                                            <option key={index} value={country.value}>{country.label}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="state" component="p" style={{ color: 'red' }} />
                                </FormGroup>
                                <FormGroup className="mb-3 text-start">
                                    <FormLabel>State</FormLabel>
                                    <Field as="select" name="state" className="form-control">
                                        {states.map((state, index) => (
                                            <option key={index} value={state.value}>{state.label}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="state" component="p" style={{ color: 'red' }} />
                                </FormGroup>

                                <FormGroup className="mb-3 text-start">
                                    <FormLabel>City</FormLabel>
                                    <Field type="text" name="city" className="form-control" />
                                    <ErrorMessage name="city" component="p" style={{ color: 'red' }} />
                                </FormGroup>
                                <FormGroup className="mb-3 text-start">
                                    <FormLabel>Zip Code</FormLabel>
                                    <Field type="text" name="zipcode" className="form-control" placeholder="Mã bưu chính của bạn" />
                                    <ErrorMessage name="zipcode" component="p" style={{ color: 'red' }} />
                                </FormGroup>
                                
                                <FormGroup className="mb-3 text-start">
                                    <Button variant="primary" type="submit">Regsiter</Button>
                                </FormGroup>
                            </Form>
                        </Formik>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}
export default Regsiter;