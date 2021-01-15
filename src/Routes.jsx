import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Cards from './components/Cards/Cards'
import Quiz from './components/quiz/Quiz'

const Routes = () => 
    <Switch>
        <Route exact path='/' component={Cards} />
        <Route path="/question/:id" component={Quiz} />
        <Redirect path='*' to='/' />
    </Switch>

export default Routes