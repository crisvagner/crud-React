import './styles.css'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from '../components/logo'
import Nav from '../components/navbar'
import Home from '../pages/home'
import Footer from '../components/footer'

export default function App(props) {
    return (
        <div className="app">
            <Logo />
            <Nav />
            <Home />
            <Footer />
        </div>
    )
}