import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

export default function Navbar() {
    return (
        <Container>
            <Jumbotron>
                <h1 className="header d-flex justify-content-center">Pariah Corp. User Directory</h1>
            </Jumbotron>
        </Container>
    )
}
