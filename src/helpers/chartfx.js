import { createChart } from 'lightweight-charts';

const chart = createChart(document.body, { width: 400, height: 300 });
const lineSeries = chart.addLineSeries();
// const candleSeries = chart.addCandlestickSeries()
// https://codesandbox.io/s/9inkb?file=/src/volumeData.js:0-6913
// https://www.youtube.com/watch?v=djMy4QsPWiI&ab_channel=PedroTech


let response = fetch('https://brapi.dev/api/v2/currency?currency=USD-CAD')

console.log(response.currency);

lineSeries.setData([
    { time: '2019-04-11', value: 80.01 },
    { time: '2019-04-12', value: 96.63 },
    { time: '2019-04-13', value: 76.64 },
    { time: '2019-04-14', value: 81.89 },
    { time: '2019-04-15', value: 74.43 },
    { time: '2019-04-16', value: 80.01 },
    { time: '2019-04-17', value: 96.63 },
    { time: '2019-04-18', value: 76.64 },
    { time: '2019-04-19', value: 81.89 },
    { time: '2019-04-20', value: 74.43 },
]);