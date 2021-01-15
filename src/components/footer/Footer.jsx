import React from 'react'
import Heart from '../../assets/heart.png'
import './Footer.css'

export default function Footer() {
    return <footer className="footer">
        <span>
            Desenvolvido com <img src={Heart} alt={"heart icon"}/> por <strong>Frankllin.</strong>
        </span>
    </footer>
}

