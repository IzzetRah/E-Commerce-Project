import React from 'react'
import './App.css'
import Header from './common/header/Header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {}
        </Switch>
      </Router>
    </>
  )
}

export default App