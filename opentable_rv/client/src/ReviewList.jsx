import React from 'react';
import ReviewEntry from './ReviewEntry.jsx'
import "./ReviewList.css";

const ReviewList = (props) => {
   // console.log(props);
  return (
    <div className="Review-list">
      {
        props.list.map(list => <ReviewEntry list={list} key={list.id} />)
      }
    </div>
  )
}

export default ReviewList;
