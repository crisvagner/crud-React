import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../pages/home'
import Users from '../pages/users'

export default function Routers(props) {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/users' component={Users} />
            <Redirect from='*' to='/' />
        </Switch>
    )
}