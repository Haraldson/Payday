import qs from 'query-string'

export default function getTaxDeductionTable(table = 7106) {
    const parameters = {
        valgtTabell: table,
        valgtInntektType: 'Lonn',
        valgtPeriode: 'PERIODE_1_MAANED',
        valgtLonn: '',
        visHeleTabellen: true,
        hentHeleTabellen: true,
        valgtAar: new Date().getFullYear()
    }

    return fetch(
        `https://api-tabellkort.app.skatteetaten.no/?${qs.stringify(parameters)}`,
        { method: 'GET' }
    )
    .then(cors => cors.json())
}
