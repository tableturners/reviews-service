import React from 'react';
import "./ReviewEntry.css";
import Rating from '@material-ui/lab/Rating';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FlagIcon from '@material-ui/icons/Flag';
import { Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);

const ReviewEntry = (props) => {
    // console.log('ggggg', props)
    return (
        <div className="txn-row reviewEntry">
            <div className="userData">
                <Avatar>
                <div className="red">{props.list.username.substring(0, 2)}</div>
                </Avatar>
                <div className="txn-data username">{props.list.username}</div>
                 <div className="txn-data">{props.list.place}</div>
                 <div className="txn-data"><ChatBubbleOutlineIcon/>{props.list.postedReview}&nbsp;reviews</div>
               
            </div>
            <div className="reviewData">
                <div className="txn-data">
                <StyledRating
          name="customized-color"
          value= {props.list.overall}
          precision={0.5}
        
        />
             Dined on{props.list.DinedDate}</div>
                <div className="txn-data"></div>
                <div className="ratings">
                    <div className="ratingName">overall &nbsp;</div>
                    <div className="ratingData">{props.list.overall}&nbsp;</div>
                    <div className="ratingName">food&nbsp;</div>
                    <div className="ratingData">{props.list.food}&nbsp;</div>
                    <div className="ratingName">ambience&nbsp;</div>
                    <div className="ratingData">{props.list.ambience}&nbsp;</div>
                    <div className="ratingName">service&nbsp;</div>
                    <div className="ratingData">{props.list.service}&nbsp;</div>
                </div>

                <div className="txn-data">{props.list.paragraph}</div>
                <div className="report">
                    <FlagIcon />
                <button>report</button>
                </div>
            </div>
        </div>
    )

}

export default ReviewEntry;
