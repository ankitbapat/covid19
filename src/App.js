import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import {fetchData} from './api';


class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount () {
        const fetchdata = await fetchData();
        this.setState({ data: fetchdata});
    }
    handleCountryChange = async (country) => {
        const fetchdata = await fetchData(country);
        this.setState({ data: fetchdata, country: country });
        console.log(fetchdata);
    }
    render() {
        const { data, country } = this.state;
        return(
            <div className={styles.container}>
                {/* <img className={styles.image} src={covidImage} alt="covid19"/> */}
                <Cards data = {data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}
export default App;