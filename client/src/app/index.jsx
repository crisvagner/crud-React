import './styles.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from '../components/logo'
import Nav from '../components/navbar'
import Routers from '../routers'
import Footer from '../components/footer'

export default function App(props) {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <Routers />
                <Footer />
            </div>
        </BrowserRouter>
    )
}