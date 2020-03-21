import React from 'react'
import "./OverallRatingDisplay.css"
import Rating from '@material-ui/lab/Rating';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

const calcluateTheAveofRatingType = (allReview, ratingType) => {
    let totalOverAll = 0
    for (let i = 0; i < allReview.length; i++) {
        totalOverAll = totalOverAll + allReview[i][ratingType]
    }
    let aveOverall = (totalOverAll / allReview.length).toFixed(1);
    return aveOverall
}

const random1to100NumGenegator = () => {
    let random = Math.floor(Math.random() * 100) + 1
    return random;
}

const OverallRatingDisplay = (props) => {
    console.log(props)
    const overall = calcluateTheAveofRatingType(props.allReview, 'overall')

    return (
        <div className="overallDisplay">

            <h1>
                what {props.allReview.length} People Are Saying
            </h1>
            <div className='container'>
                <div className="leftside">

                    <div className="column1">Overall ratings and reviews</div>
                    <div className="column2">Reviews can only be made by diners who have eaten at this restaurant</div>
                    <div className="column3">
                        <Rating name="read-only" value={overall} precision={0.1} readOnly />
                        {calcluateTheAveofRatingType(props.allReview, 'overall')} &nbsp; based on recent ratings
                    </div>
                    <div className="ratings">
                        <div className="ratingNum">{calcluateTheAveofRatingType(props.allReview, 'overall')} &nbsp;</div>
                        <div className="ratingNum">{calcluateTheAveofRatingType(props.allReview, 'food')}  &nbsp;</div>
                        <div className="ratingNum">{calcluateTheAveofRatingType(props.allReview, 'service')}  &nbsp;</div>
                        <div className="ratingNum">{calcluateTheAveofRatingType(props.allReview, 'ambience')}  &nbsp;</div>
                    </div>
                    <div className="ratingsName">
                        <div className="ratingTag">Overall&nbsp;</div>
                        <div className="ratingTag">Food&nbsp;</div>
                        <div className="ratingTag">Service&nbsp;</div>
                        <div className="ratingTag">Ambience&nbsp;</div>
                    </div>
                    <div className="nosie">
                        <SignalCellularAltIcon />
                        <div className="column4"> &nbsp; Noise &nbsp;</div>
                        <div> Moderate</div>
                    </div>
                    <div className="recommend">
                        <ThumbUpIcon />{random1to100NumGenegator()}% of people would recommend it to a friend
                    <div className="loved">Loved For <ErrorOutlineIcon /></div>
                    <div className="grid">    
                        <Grid item xs={6}>
                            <Paper ><LocalCafeIcon/>Most Booked 1000-Point Tables San Francisco</Paper>
                        </Grid>
                    </div>    
                    </div>

                </div>
                <div className="rightside">

                    <div>
                        star garph right here
                </div>

                </div>

            </div>
        </div>
    )

}

export default OverallRatingDisplay