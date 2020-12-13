import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function InputButton(props) {

       function handleClick(e) {
              document.querySelectorAll("input").forEach(input => {
                  input.checked = false
              })
              e.checked = true
          }

       return (
       <ListGroup.Item className="d-flex  align-items-center justify-content-start">
              <input className="mr-3" onClick={e => handleClick(e.target)} type="checkbox" />
              {props.quest}
       </ListGroup.Item>
       )
}