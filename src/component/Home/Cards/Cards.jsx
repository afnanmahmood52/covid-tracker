import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'
import styles from './Cards.module.css'

export default function Cards() {

    const count_dur = 2.5;
    const data ={lastUpdate: '25-10-2020'}

    //if(!data.confirmed){
    //    return 'Loading...';
    //}
    
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center" data-aos="fade-left" data-aos-duration="1200">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Infected</Typography>
                <Typography variant="h5">
                    <CountUp
                        start={0}
                        // end={data.confirmed.value}
                        end={2545898}
                        duration={count_dur}
                        separator=","
                    >
                    </CountUp>
                </Typography>
                <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of active COVID-19 cases</Typography>
            </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                <Typography variant="h5">
                <CountUp
                        start={0}
                        //end={data.recovered.value}
                        end={2545898}
                        duration={count_dur}
                        separator=","
                    >
                    </CountUp>
                </Typography>
                <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of recovered COVID-19</Typography>
            </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                <Typography variant="h5">
                <CountUp
                        start={0}
                        //end={data.deaths.value}
                        end={2545898}
                        duration={count_dur}
                        separator=","
                    >
                    </CountUp>
                </Typography>
                <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of deaths due to COVID-19</Typography>
            </CardContent>
        </Grid>

      </Grid>
    </div>
  )
}
