import React, { Component } from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap'
import Axios from 'axios'

import '../header/Header'
import Main from '../Main/Main'
import InputButton from './InputButton'

const baseUrl = 'http://localhost:3001/quiz'
const initialState = {
    list: [],
}

export default class Quiz extends Component {
 
    state = { ...initialState }

    componentDidMount() {
        console.log(this.props.cardId)

        Axios(baseUrl).then(resp => {
            this.setState({ list: resp.data})
        })

    }
    
    renderQuest() {

        const item = this.state.list.filter(l => l.id == this.props.cardId)[0]
        for(let i in item) {
             console.log(typeof i)
            
        }

       // console.log(item["id"])
        
        return (
            
            <Card className="container">
                <Card.Header>
                    <Card.Title>Pergunta: </Card.Title>
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
