import React, { Component } from 'react'
import Header from './header'
import MonthSummary from './month-summary'

export default class App extends Component {
    render() {
        return (
            <div id="app" className="rows">
                <div className="row shrink">
                    <Header />
                </div>
                <div className="row">
                    <MonthSummary />
                </div>
            </div>
        )
    }
}
