import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Quiz from '../quiz/Quiz'
import Main from '../Main/Main'
import { Card, Button } from 'react-bootstrap'
import img from '../../assets/logo_size_invert.jpg'


const baseUrl = 'http://localhost:3001/quiz'
const initialState = {
    list: [],
    cardId: null
}

export class Cards extends Component {

    state = { ...initialState}

    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data})
            console.log(this.state.list)
        })
    }

    setComplement(id) {
        console.log('okoko')
        ReactDOM.render(
            <Quiz cardId={id}/>
        , document.getElementById('main'))
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
                        
                            <Button onClick={() => this.setComplement(id)}
                                variant="primary">Iniciar</Button>
                        
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
