import './styles.css'
import React from 'react'

import Icon from '../icons'

export default function Nav(props) {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <Icon href='/' icon='home' content='Início' />
                <Icon href='/users' icon='users' content='Usuários' />
            </nav>
        </aside>
    )
}