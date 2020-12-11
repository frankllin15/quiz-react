import React, { Component } from 'react'
import axios from 'axios'
import Main from '../Main/Main'
import { Card, Button } from 'react-bootstrap'

const baseUrl = 'http://localhost:3001/quiz'
const initialState = {
    list: []
}

export default class Cards extends Component {

    state = { ...initialState}

    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data})
            console.log(this.state.list)
        })
    }

     renderCard() {
         return this.state.list.map((quiz, id) => {
            return (
                <div className="mr-5" key={id}>

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
            <Card.Title>{quiz.title}</Card.Title>
                    <Card.Text>{quiz.description}</Card.Text>
                    <Button variant="primary">Iniciar</Button>
                </Card.Body>
            </Card>
                </div>
            )
         })
     }

   render() {
       return(
       <Main>
           {this.renderCard()}
       </Main>

       )
   }
}