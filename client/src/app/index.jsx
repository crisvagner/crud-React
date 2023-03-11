import './styles.css'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from '../components/Logo'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function App(props) {
    return (
        <div className="app">
            <Logo />
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}