import React from 'react'
import "./OverallRatingDisplay.css"



const calcluateTheAveofOverall =(allReview) =>{
    let totalOverAll = 0
    for (let i = 0; i < allReview.length; i++) {
        totalOverAll = totalOverAll + allReview[i].overall
    }
    let aveOverall = (totalOverAll / allReview.length).toFixed(1);
    return aveOverall
}


const OverallRatingDisplay = (props) => {
    console.log(props)


    return (
        <div className="overallDisplay">
            <h1>
                what {props.allReview.length} People Are Saying
            </h1>
            <div className='container'>
                <div className="leftside">

                    <div className="column1">Overall ratings and reviews</div>
                    <div className="column2">Reviews can only be made by diners who have eaten at this restaurant</div>
                    <div className="column3">stars!</div>
                    <div className="ratings">
                        <div className="ratingNum">{calcluateTheAveofOverall(props.allReview)} &nbsp;</div>
                        <div className="ratingNum">2  &nbsp;</div>
                        <div className="ratingNum">3  &nbsp;</div>
                        <div className="ratingNum">4  &nbsp;</div>
                    </div>
                    <div className="ratingsName">
                        <div className="ratingTag">Overall&nbsp;</div>
                        <div className="ratingTag">Food&nbsp;</div>
                        <div className="ratingTag">Service&nbsp;</div>
                        <div className="ratingTag">Ambience&nbsp;</div>
                    </div>

                </div>
                <div className="rightside">
                </div>
                <div>
                    star garph right here
                </div>
            </div>
        </div>
    )

}

export default OverallRatingDisplay