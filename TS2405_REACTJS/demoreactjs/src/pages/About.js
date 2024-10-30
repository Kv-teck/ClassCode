import { useState } from "react";
import HomeAbout from "../components/UI/HomeAbout";
import HomeFeature from "../components/UI/HomeFeature";
import HomeFirmVisit from "../components/UI/HomeFirmVisit";
import { Col, Row, Button, Form } from "react-bootstrap";


const About = () => {
    const [info, setInfo] = useState({});
    const handleInput = (e) => {
        const value = e.target.value; // lấy được giá trị của input đang được target đến
        const name = e.target.name;
        setInfo({ ...info, [name]: value });//sẽ trả về giá trị của info sau khi đã cập nhật giá trị
    }
    const submitForm = () => {

    }

    ////////////
    const [number, setNumber] = useState(10); //khai báo 1 state là number có giá trị ban đầu = 10
    const clickMe = () => {
        setNumber(number + 10 > 100 ? 100 : number + 10);//<=> number = number + 1
    }

    const minus = () => {
        setNumber(number - 10 > 0 ? number - 10 : 0);
    }
    /////////////
    const about_me = "CHafisacklew";
    const desc_txt = "fasfjoawjfajsflkajw";
    const fas = [
        "Tempor erat elitr rebum at clita",
        "Aliqu diam amet diam et eos",
        "Clita duo justo magna dolore erat amet",
    ];

    const features = [
        {
            icon: "/img/icon-1.png",
            label: "Natural Process",
            text: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
        },
        {
            icon: "/img/icon-2.png",
            label: "Organic Products",
            text: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
        },
        {
            icon: "/img/icon-3.png",
            label: "Biologically Safe",
            text: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
        },
    ];
    return (
        <>
            <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-body" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-dark active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container">
                <h2>Number: {number}</h2>
                <p><button onClick={clickMe} className="btn btn-primary">Click me</button></p>
                <p><button onClick={minus} className="btn btn-danger">Minus Number</button></p>
                <Row>
                    <Col xs={4}>
                        <Form className="text-start" onSubmit={submitForm}>
                            <Form.Group className="mb-3" controlId="formBasicFullname">
                                <Form.Label>Fullname: {info.fullname}</Form.Label>
                                <Form.Control onChange={handleInput} value={info.fullname} name="fullname" type="text" placeholder="Enter Full name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address: {info.email}</Form.Label>
                                <Form.Control onChange={handleInput} name="email" value={info.email} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password: {info.password}</Form.Label>
                                <Form.Control onChange={handleInput} name="password" value={info.password} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>

            <HomeAbout label={about_me} sub_title={desc_txt} list={fas}>Hello world</HomeAbout>
            <HomeFirmVisit />
            <HomeFeature list={features} />
        </>
    );
}
export default About;