import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './components/home/Home'
import Quiz from './components/quiz/Quiz'

const Routes = () => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/question' component={Quiz} />
        <Redirect path='*' to='/' />
    </Switch>

export default Routes