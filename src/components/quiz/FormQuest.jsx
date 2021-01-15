import React, { Component } from 'react'

import { Card, Button, ListGroup } from 'react-bootstrap'


export default class formQuest extends Component {

       // constructor(props) {
       //        super(props)
       //        this.state = {props: props}
       // }

       handleClick(e) {
              document.querySelectorAll("input").forEach(input => {
                     input.checked = false
              })
              e.checked = true
       }


       render() {
              return (
                     <Card className="container mt-4">

                            <Card.Header>
                                   <Card.Title>{this.props.title}</Card.Title>
                            </Card.Header>
                            <Card.Body  >
                                   <ListGroup variant="flush">
                                          <ListGroup.Item key={1} className="d-flex align-items-center justify-content-start">
                                                 <input className="mr-3" onClick={e => this.handleClick(e.target)} type="checkbox" />
                                                 {this.props.alternative.a}
                                          </ListGroup.Item>
                                          <ListGroup.Item key={2} className="d-flex  align-items-center justify-content-start">
                                                 <input className="mr-3" onClick={e => this.handleClick(e.target)} type="checkbox" />
                                                 {this.props.alternative.b}
                                          </ListGroup.Item>
                                          <ListGroup.Item key={3} className="d-flex  align-items-center justify-content-start">
                                                 <input className="mr-3" onClick={e => this.handleClick(e.target)} type="checkbox" />
                                                 {this.props.alternative.c}
                                          </ListGroup.Item>
                                          <ListGroup.Item key={4} className="d-flex  align-items-center justify-content-start">
                                                 <input className="mr-3" onClick={e => this.handleClick(e.target)} type="checkbox" />
                                                 {this.props.alternative.d}
                                          </ListGroup.Item>
                                   </ListGroup>
                            </Card.Body>
                            <Card.Body>
                                   <Button variant="primary">Responder</Button>
                            </Card.Body>
                     </Card>

              )
       }

}