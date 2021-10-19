import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Footer = () => {
    return (
        <footer
            style={{
                width: "100%",
                position: "relative",
                bottom: 0,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Container>
                <Row>
                    <Col className="text-center py-3">Footer</Col>
                </Row>
            </Container>
        </footer>
    )
}
