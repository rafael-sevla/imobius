import './App.css'
import React from 'react'
import { BrowserRouter as Router } from  'react-router-dom'
import BaseDashboard from "../components/layouts/BaseDashboard";



const App = props => (
    <div className="App">
      <Router>
        <BaseDashboard />
      </Router>
    </div>
)

export default App