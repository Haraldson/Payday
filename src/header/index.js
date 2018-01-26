import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        const now = new Date()
        const months = [
            'Januar',
            'Februar',
            'Mars',
            'April',
            'Mai',
            'Juni',
            'Juli',
            'August',
            'September',
            'Oktober',
            'November',
            'Desember'
        ]

        return (
            <header>
                <h1>Payday</h1>
                <h2>{months[now.getMonth()]}</h2>
            </header>
        )
    }
}
