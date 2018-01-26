import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import registerServiceWorker from './registerServiceWorker'
import './style/reset.css'
import './index.scss'

ReactDOM.render(<App />, document.getElementById('payday'))
registerServiceWorker()
