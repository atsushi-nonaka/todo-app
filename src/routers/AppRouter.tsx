import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Dashboard } from '../components/Dashboard'
import { Edit } from '../components/Edit'
import Header from '../components/Header'
import { NotFound } from '../components/NotFound'
import { Registration } from '../components/Registration'

export const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path='/' component={Dashboard} exact/>
            <Route path='/registration' component={Registration} />
            <Route path='/edit/:id' component={Edit} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)