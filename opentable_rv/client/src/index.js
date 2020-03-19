import React from 'react';
import ReactDom from 'react-dom';
//import App from './App.jsx';
import $ from 'jquery';
import { ajax } from 'jquery';
import ReviewList from './ReviewList.jsx';
import CheckBoxFilter from './CheckBoxFilter.jsx';
import keyTagMaker from './helpers/keyTagMaker.js'
import { set } from 'mongoose';
import DropDownRating from './DropDownRating.jsx';
import * as constants from './helpers/constants.js';

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
            keyTag: keyTagMaker(),
            allReview: [],
            filterReviews: [],
            filter: new Set(),
            sortingStrategy: constants.HIGHEST_RATING,
           
        }
        this.getReviews = this.getReviews.bind(this)
        this.updateFilterStatus = this.updateFilterStatus.bind(this)
        this.selectDropDownOption = this.selectDropDownOption.bind(this)
    }

    componentDidMount() {

        this.getReviews();
    }

    componentDidUpdate(prevProps, prevState) { // if the state changes , we call the calculateFilteredReviews
        if (prevState.allReview !== this.state.allReview
            || prevState.filter !== this.state.filter) {
            this.calculateFilteredReviews();
        }

    }


    getReviews() {
        let restId = Math.floor(Math.random() * 30)
        $.get(`/api/reviewlist/${restId}`, (rows) => {
            this.setState({
                allReview: rows
            })
        })
    }

    // returns a boolean
    doesReviewSatisfyFilters(review, filters) {
        for (let tag of filters) {
            if (!review.paragraph.includes(tag)) {
                return false;
            }
        }

        return true;
    }
  // if need nested array method, make a help function 
    calculateFilteredReviews() {
        // console.warn(`
        //     calculateFilteredReviews running with allReviews: ${JSON.stringify(this.state.allReview)}\n\n
        //     filters: ${JSON.stringify(Array.from(this.state.filter))}
        //     `);

        let newFilterReviews = [];
       console.log(this.state.allReview.sort(function(a,b){
           return new Date(b.DinedDate) - new Date(a.DinedDate);
       }))
        for (let i = 0; i < this.state.allReview.length; i++) {

            const currentReview = this.state.allReview[i]

            if(this.doesReviewSatisfyFilters(currentReview, this.state.filter)){
                newFilterReviews.push(currentReview)
             }
        }

        // console.warn(`calculateFilteredReviews done running. The result is $${JSON.stringify(newFilterReviews)}$`);
        this.setState({filterReviews: newFilterReviews},() => {
            this.selectDropDownOption(this.state.sortingStrategy)
        });
    }

    // take 2 arguments, the tag name, and whether it's checked.
    updateFilterStatus(tag, isChecked) {
        const copyOfOldSet = new Set(this.state.filter);
        if (isChecked) {
            copyOfOldSet.add(tag);
        } else {
            copyOfOldSet.delete(tag);
        }

        this.setState({
            filter: copyOfOldSet
        });
    }

    // TODO: refactor. DRY. "Dont repeat yourself"
    selectDropDownOption(options){
        this.setState({
            sortingStrategy: options
        });

        if(options === constants.NEWEST_RATING){
            this.setState({
                filterReviews: this.state.filterReviews.sort(function(a,b){
                    return new Date(b.DinedDate) - new Date(a.DinedDate)
                })
            })
        } else if (options === constants.HIGHEST_RATING){
            this.setState({
                filterReviews: this.state.filterReviews.sort(function(a,b){
                    return b.overall - a.overall
                })
            })
        } else if (options === constants.LOWEST_RATING){
            this.setState({
                filterReviews: this.state.filterReviews.sort(function(a,b){
                    return a.overall - b.overall
                })
            }) 
        } else {
            throw `Invalid selected drop down option: ${options}`;
        }
    }



    render() {
        // console.log(this.state.allReview[0].overall)
        // console.log(this.state.allReview[0].id)
        //console.log(this.props.data);
        return (
            <div>
                <h1>ReviewList</h1>
                <div>
                    <DropDownRating selectDropDownOption = {this.selectDropDownOption}/>
                    <CheckBoxFilter data={this.state.keyTag} updateFilterStatus={this.updateFilterStatus} />
                    <ReviewList list={this.state.filterReviews} />
                </div>
            </div>
        )

    }

}


ReactDom.render(<App />, document.getElementById('app'));
