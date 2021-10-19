import React from 'react'
import MainScreen from '../../components/MainScreen';
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

const RegisterPage = () => {

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [employee_id, setEmployee_id] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)


    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(employee_id, password);

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            setLoading(true)

            const { data } = await axios.post('/api/users',
                {
                    fname,
                    lname,
                    email,
                    employee_id,
                    password
                },
                config
            );

            console.log("data:", data);
                
            setLoading(false)
            window.location.href = '/employees'
        } catch (error) {
            setError(error.response.data.message)
            setLoading(false)
        }
    }

    return (
        <MainScreen title="ADD NEW EMPLOYEE">
            <div className="loginContainer">
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {loading && <Loading />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control
                            type="name"
                            value={fname}
                            placeholder="Enter Firstname"
                            onChange={(e) => setFname(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control
                            type="name"
                            value={lname}
                            placeholder="Enter Lastname"
                            onChange={(e) => setLname(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Employeed_ID</Form.Label>
                        <Form.Control
                            // type=""
                            value={employee_id}
                            placeholder="Enter Employee ID"
                            onChange={(e) => setEmployee_id(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Row className="py-3">
                    <Col>
                        {/* New Customer ? <Link to="/register">Register Here</Link> */}
                    </Col>
                </Row>
            </div>
        </MainScreen>
    )
}

export default RegisterPage;