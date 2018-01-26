import { get } from 'lodash'

export default async function getHolidays() {
    return fetch(
        `https://webapi.no/api/v1/holydays/${new Date().getFullYear()}`,
        { method: 'GET' }
    )
    .then(cors => cors.json())
    .then(json => get(json, 'data', []))
}
