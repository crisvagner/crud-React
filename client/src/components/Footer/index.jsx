import './styles.css'
import React from 'react'

export default function Footer(props) {
    return (
        <footer className="footer">
            <span>
                <strong><span className="text-info">React</span> é show <i className="fa fa-heart text-danger"></i></strong>
            </span>
        </footer>
    )
}