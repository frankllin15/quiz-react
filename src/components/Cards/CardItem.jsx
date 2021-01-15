import React from 'react'
import { Card, Button } from 'react-bootstrap'
import img from '../../assets/logo_size_invert.jpg'
import { Link } from 'react-router-dom'

export default function CardItem(props) {
    const path = `question/${props.id}`

        return (
            <div className="mr-4 mt-4" >
                <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                        <Link to={path}>
                        <Button 
                            variant="primary">Iniciar
                        </Button>
                            </Link>
                </Card.Body>
                </Card>
            </div>
        )
}
