import './styles.css'
import React from 'react'

export default function Nav(props) {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <a href="/">
                    <i className="fa fa-home"></i> Início
                </a>
                <a href="/users">
                    <i className="fa fa-users"></i> Usuários
                </a>
            </nav>
        </aside>
    )
}