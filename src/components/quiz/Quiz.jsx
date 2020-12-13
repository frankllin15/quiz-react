import React, { Component } from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap'
import '../header/Header'
import Main from '../Main/Main'
import InputButton from './InputButton'

export default class Quiz extends Component {

    componentDidMount() {
        
    }
    
    renderQuest() {

        return (
            
            <Card className="container">
                <Card.Header>
                    <Card.Title>Pergunta</Card.Title>
                </Card.Header>
                <Card.Body  >
                    <ListGroup variant="flush">
                        <InputButton quest=" Cras justo odio"/> 
                        <InputButton quest=" Cras justo odio"/> 
                        <InputButton quest=" Cras justo odio"/> 
                        <InputButton quest=" Cras justo odio"/> 
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
