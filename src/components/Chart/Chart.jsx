import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({data, country}) => {
    const [dailyData, setDailyData] = useState([]); //hooks; dailyData is same as state object with a data object inside it.
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData( await fetchDailyData() );
        }
        fetchAPI();
    }, []);
    // const lineChart = (
    //     dailyData.length ? (
    //     <Line
    //         data = {{
    //             labels: dailyData.map(({ date }) => date),
    //             datasets: [{
    //                 data: dailyData.map(({ confirmed }) => confirmed),
    //                 label: 'Infected',
    //                 borderColor: '#3333ff',
    //                 fill: true,
    //             }, {
    //                 data: dailyData.map(({ deaths }) => deaths),
    //                 label: 'Deaths',
    //                 borderColor: 'red',
    //                 backgroundColor: 'rgba(255,0,0,0.5)',
    //                 fill: true,
    //             }],
    //         }}
    //     />) : null
    // );

    const barChart = (
        data.confirmed ? (
            <Bar
                data = {{
                    labels:['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        // label: 'People',
                        backgroundColor: ['#0177b5','#2f7b15','#d11024'],
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    // title: { display: true, text:`Current state in ${country}` },
                }}
            />
        ): null
    );

    return (
        <div className={styles.container}>
            {/* {country ? barChart : lineChart} */}
            {barChart}
        </div>
    )
}

export default Chart;