import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions'
import ErrorMessage from '../../components/ErrorMessage'
import Loading from '../../components/Loading'
import MainScreen from '../../components/MainScreen'
import './LoginPage.css'

const LoginPage = ({ history }) => {

    const [employee_id, setEmployee_id] = useState("")
    const [password, setPassword] = useState("")
    // const [error, setError] = useState(false)
    // const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin
    
    useEffect(() => {
        if (userInfo) {
            history.push("/attendance")
        }
    }, [history,userInfo])

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log("employee_id :", employee_id);
        console.log("password :", password);
        dispatch(login(employee_id,password))
    }


    return (
        <MainScreen title="LOGIN">
            <div className="loginContainer">
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {loading && <Loading />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control
                            // type=""
                            value={employee_id}
                            placeholder="Enter employee id"
                            onChange={(e) => setEmployee_id(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
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

export default LoginPage
