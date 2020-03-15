import React from 'react';
import "./ReviewEntry.css";

const ReviewEntry = (props) => {
 // console.log('ggggg', props)
  return (
    <div className="txn-row">
        
      <div className="txn-data username">{props.list.username}</div>
      <div className="txn-data">{props.list.place}</div>
      <div className="txn-data">{props.list.DinedDate}</div>
      <div className="txn-data">{props.list.postedReview}</div>
      <div className="txn-data">{props.list.paragraph}</div>
      <div className="txn-data">{props.list.overall}</div>
      <div className="txn-data">{props.list.food}</div>
      <div className="txn-data">{props.list.ambience}</div>
      <div className="txn-data">{props.list.service}</div>
      <div className="txn-data">{props.list.star}</div>
    </div>
  )

}

export default ReviewEntry;
