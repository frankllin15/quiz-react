import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Main from '../Main/Main'
import { Card, Button } from 'react-bootstrap'
import img from '../../assets/logo_size_invert.jpg'


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
                <div className="mr-4 mt-4" key={id}>

                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{quiz.title}</Card.Title>
                        <Card.Text>{quiz.description}</Card.Text>
                        <Link to='/question'>
                            <Button variant="primary">Iniciar</Button>
                        </Link>
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