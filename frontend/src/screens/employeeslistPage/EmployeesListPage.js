import React, { useEffect, useState } from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../../components/MainScreen'
import axios from 'axios'

const EmployeesListPage = () => {

    const [employees, setEmployees] = useState([])

    const fetchEmployees = async () => {
        const { data } = await axios.get('/api/employees')
        console.log("data from axios:", data);
        setEmployees(data)
    }

    useEffect(() => {
        fetchEmployees()
    }, [])

    return (
        <MainScreen title="รายชื่อพนักงาน">
            <Link to="register">
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                    Add New Employee
                </Button>
            </Link>
            {
                employees.map(employee => (
                    <Accordion key={employee._id}>
                        <Card style={{ margin: 10 }}>
                            <Card.Header style={{ display: 'flex' }}>
                                <span
                                    style={{
                                        color: "black",
                                        textDecoration: "none",
                                        flex: 1,
                                        cursor: "pointer",
                                        alignSelf: "center",
                                        fontSize: 18,
                                    }}
                                >
                                    <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                                        {employee.fname + "   " + employee.lname}
                                    </Accordion.Toggle>
                                </span>

                                <div>
                                    <label style={{ paddingRight:15,fontSize: 15 }}>คลิกชื่อเพื่อดูรายละเอียด</label>
                                    <Button>Edit</Button>
                                    <Button variant="danger" className="mx-2">Delete</Button>
                                </div>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            {employee.fname}
                                        </p>
                                        <footer className="blockquote-footer">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Accordion.Collapse>

                        </Card>
                    </Accordion>

                ))
            }

        </MainScreen>
    )
}

export default EmployeesListPage
