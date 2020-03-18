import React from 'react';
import ReactDom from 'react-dom';
//import App from './App.jsx';
import $ from 'jquery';
import { ajax } from 'jquery';
import ReviewList from './ReviewList.jsx';
import CheckBoxFilter from './CheckBoxFilter.jsx';
import keyTagMaker from './helpers/keyTagMaker.js'
import { set } from 'mongoose';

/* TODO(filtering):
Data Structure: all of this in app state
    allReviews: array of reviews.
    filteredReviews: array of filtered reviews. this will be passed as a prop to ReviewList.
    filters: Set of checked filters.

Operations on data:
    a function called calculateFilteredReviews(), which calcualtes filteredReviews given allReviews and filters
    a function called updateFilterStatus, which is passed down to the checkbox components. sets filters state.
 */


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allReview: [],
            filterReviews:[],
            filter: new Set(),
        }
        this.getReviews = this.getReviews.bind(this)
    }

    componentDidMount() {
        
        this.getReviews();
    }


    getReviews() {
        let restId = Math.floor(Math.random() * 30)
        $.get(`/api/reviewlist/${restId}`, (rows) => {
            this.setState({
                allReview: rows
            })
        })
    }

    calculateFilteredReviews(){

    }
  
    updateFilterStatus(e){
        if(e.target.checked){
            this.setState(({filter}) =>({
                filter:new Set(filter).add(this.props.tag)
            }))
        } else {
            this.setState(({filter}) =>({
                filter:new Set(filter).delete(this.props.tag)
            })
            )
        }
    }
    

    render() {
        
         console.log(this.props.data);
        return (
            <div>
                <h1>ReviewList</h1>
                <div>
                    <CheckBoxFilter data ={keyTagMaker()} updateFilterStatus = {this.updateFilterStatus}/>
                    <ReviewList list={this.state.allReview} />
                </div>
            </div>
        )

    }

}


ReactDom.render(<App />, document.getElementById('app'));
