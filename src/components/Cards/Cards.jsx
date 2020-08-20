import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';

import cx from 'classnames';


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } } ) => {

    if(!confirmed) {return 'Loading..'}
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify = "center">
                <Grid style={{borderRadius: '50%', textAlign:'center'}} item component={Card} xs={12} md={3} className = {cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Infected</Typography>
                        <Typography style= {{color: '#0177b5', fontWeight: 'bold'}} variant = "h7" >{confirmed.value}
                            {/* <CountUp start = {0} end = {confirmed.value} duration = {2} separator = ","/> */}
                        </Typography>
                        <Typography color = "textSecondary">{ new Date(lastUpdate).toDateString() }</Typography>
                        {/* <Typography variant = "body2">Number of active cases of COVID-19</Typography> */}
                    </CardContent>
                </Grid>
                <Grid style={{borderRadius: '50%', textAlign:'center'}} item component={Card} xs={12} md={3} className = {cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
                        <Typography style= {{color: '#2f7b15', fontWeight: 'bold'}} variant = "h7">{recovered.value}
                            {/* <CountUp start = {0} end = {recovered.value} duration = {2} separator = ","/> */}
                        </Typography>
                        <Typography color = "textSecondary">{ new Date(lastUpdate).toDateString() }</Typography>
                        {/* <Typography variant = "body2">Number of recoveries from COVID-19</Typography> */}
                    </CardContent>
                </Grid>
                <Grid style={{borderRadius: '50%', textAlign:'center'}} item component={Card} xs={12} md={3} className = {cx(styles.card, styles.deaths)} >
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Deaths</Typography>
                        <Typography  style= {{color: '#d11024', fontWeight: 'bold'}} variant = "h7">{deaths.value}
                            {/* <CountUp start = {0} end = {deaths.value} duration = {2} separator = ","/> */}
                        </Typography>
                        <Typography color = "textSecondary">{ new Date(lastUpdate).toDateString() }</Typography>
                        {/* <Typography variant = "body2">Number of deaths caused by COVID-19</Typography> */}
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;