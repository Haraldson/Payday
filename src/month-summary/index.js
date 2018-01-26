import React, { Component } from 'react'
import { startOfMonth, endOfMonth, eachDayOfInterval, isWeekend, isWithinInterval } from 'date-fns'
import { map, reject, filter } from 'lodash'
import getHolidays from 'api/get-holidays'

export default class MonthProgress extends Component {
    state = {
        weekdays: [],
        holidays: []
    }

    componentDidMount() {
        getHolidays().then(yearHolidays => {
            const now = new Date()
            const monthBounds = {
                start: startOfMonth(now),
                end: endOfMonth(now)
            }

            const weekdays = map(reject(eachDayOfInterval(monthBounds), isWeekend), date => ({ date }))
            const holidays = filter(yearHolidays, yearHoliday => isWithinInterval(yearHoliday.date, monthBounds))

            this.setState({ weekdays, holidays })
        })
    }

    render() {
        const { weekdays, holidays } = this.state

        return (
            <div id="month-summary">
                {!holidays.length && <p className="day-counts">
                    <strong>{`${weekdays.length * 7.5}`.replace(/\./g, ',')} timer</strong> fordelt på totalt <strong>{weekdays.length} arbeidsdager</strong>
                </p>}
                {!!holidays.length && <p className="day-counts">
                    <strong>{weekdays.length * 7.5} timer</strong> fordelt på <strong>{weekdays.length - holidays.length} arbeidsdager</strong> og <strong>{holidays.length === 1 ? 'én' : holidays.length} helligdag{holidays.length > 1 ? 'er' : ''}</strong>
                </p>}
                <div className="progress">
                    <div className="columns">
                        <div className="holidays column shrink" style={{ width: `${holidays.length / weekdays.length * 100}%` }}></div>
                        <div className="weekdays column"></div>
                    </div>
                </div>
            </div>
        )
    }
}
