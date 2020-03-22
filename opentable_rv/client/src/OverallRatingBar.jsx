import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './OverallRatingBar.css';

/**
 * Props: 
 *  starValue: a number, 1-5.
 *  allReview: all the review data.
 */
export default class OverallRatingBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.calculatePercentageOfStarValueReviews = this.calculatePercentageOfStarValueReviews.bind(this);
    }

    calculatePercentageOfStarValueReviews() {
        let totalNumStarValueReviews = 0;
        this.props.allReview.forEach(
            (currentReview) => {
                if (currentReview.overall === this.props.starValue) {
                    totalNumStarValueReviews++;
                }
            }
        );
        //console.log(`calculating starReview percentage. Found ${totalNumStarValueReviews} reviews with rating ${this.props.starValue}`);
        const percentage = totalNumStarValueReviews / this.props.allReview.length;
       // console.log(percentage);
        return percentage * 100;
    }


    render() {
        return (
            <div className="OverallRatingBar-container">
                <tr>
                <td><span>{this.props.starValue}</span></td>
                <td className="OverallRatingBar-ProgressBarWrapper"><ProgressBar variant="danger" now={this.calculatePercentageOfStarValueReviews()} /></td>
                </tr>
            </div>
        );
    }
}