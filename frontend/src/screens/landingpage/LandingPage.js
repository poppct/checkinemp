import React from 'react'
import './LandingPage.css'
import { Button, Container, NavLink, Row} from 'react-bootstrap'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const LandingPage = ({history}) => {

    // useEffect(() => {
    //     const userInfo = localStorage.getItem("userInfo")
    //     if (userInfo) {
    //         history.push("/attendance")
    //     }
    // }, [history])

    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <h1 className="title">Welcome to CHECK IN EMP</h1>
                            <p className="subtitle">login for submit your attendance now!! before you are late</p>
                        </div>
                        <div className="buttonContainer">
                            <Link to="/login">
                                <Button size="lg" className="landingbutton">
                                    Login
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
