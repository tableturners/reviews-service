import React from 'react';

const ReviewEntry = (props) => {
  console.log('ggggg', props)
  return (
    <div className="txn-row">
      <div className="txn-data">{props.list.username}</div>
      <div className="txn-data">{props.list.place}</div>
      <div className="txn-data">{props.list.DinedDate}</div>
      <div className="txn-data">{props.list.postedReview}</div>
    </div>
  )

}

export default ReviewEntry;