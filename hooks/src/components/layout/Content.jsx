import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Hooks from '../../views/Content/Hooks'
import UseState from '../../views/Content/UseState'
import UseEffect from '../../views/Content/UseEffect'
import UseContext from '../../views/Content/UseContext'
import NaoEncontrado from '../../views/Content/NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/UseState">
                <UseState />
            </Route>
            <Route path="/UseEffect">
                <UseEffect />
            </Route>
            <Route path="/UseContext">
                <UseContext />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content