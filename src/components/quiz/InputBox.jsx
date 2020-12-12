import React, { Component } from 'react'


export default function InputBox() {
    
    function falar() {
        console.log("foi")
    }
    return (
        <input onClick={falar} className="mr-3" type="radio" aria-label="Radio button for following text input"></input>
    )
}

