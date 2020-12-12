import React, { Component } from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap'
import '../header/Header'
import Main from '../Main/Main'
import InputBox from './InputBox'


function falar() {
    console.log('oi')
}


export default class Quiz extends Component {

     
   
componentDidMount() {
    falar()
}
   
    renderQuest() {

        return (
            <Card className="container">
                <Card.Header>
                    <Card.Title>Pergunta</Card.Title>
                </Card.Header>
                <Card.Body  >
                    <ListGroup  variant="flush">
                        <ListGroup.Item className="d-flex  align-items-center justify-content-start"> <InputBox /> Cras justo odio</ListGroup.Item>

                    </ListGroup>
                </Card.Body>
                    <Card.Body>
                    <Button variant="primary">Responder</Button>
                    </Card.Body>
            </Card>
        )
    }

    render() {
        return (
            <Main>
                {this.renderQuest()}
            </Main>
        )
    }
}
