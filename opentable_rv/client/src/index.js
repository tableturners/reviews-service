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
            keyTag: keyTagMaker(),
            allReview: [],
            filterReviews: [],
            filter: new Set(),
        }
        this.getReviews = this.getReviews.bind(this)
        this.updateFilterStatus = this.updateFilterStatus.bind(this)
    }

    componentDidMount() {

        this.getReviews();
    }

    componentDidUpdate(prevProps, prevState) {
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

    calculateFilteredReviews() {
        console.warn(`
            calculateFilteredReviews running with allReviews: ${JSON.stringify(this.state.allReview)}\n\n
            filters: ${JSON.stringify(Array.from(this.state.filter))}
            `);

        let newFilterReviews = [];
        for (let i = 0; i < this.state.allReview.length; i++) {
           // console.log(this.state.allReview[0].paragraph)
            //console.log(this.state.allReview[i])
            
            for (let tag of this.state.filter) {
                console.log(tag)
                const currentReview = this.state.allReview[i]
                if(currentReview.paragraph.includes(tag)){
                   newFilterReviews.push(currentReview)
                }
                
            }
        }

        console.warn(`calculateFilteredReviews done running. The result is $${JSON.stringify(newFilterReviews)}$`);
        this.setState({filterReviews: newFilterReviews})
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

        // if(isChecked){
        //     this.setState(({filter}) =>({
        //         filter:new Set(filter).add(tag)
        //     }))
        // } else {
        //     this.setState(({filter}) =>({
        //         filter:new Set(filter).delete(tag)
        //     })
        //     )
        // }
    }


    render() {
        console.log(this.state.allReview)
        // console.log(this.state.allReview[0].id)
        //console.log(this.props.data);
        return (
            <div>
                <h1>ReviewList</h1>
                <div>
                    <CheckBoxFilter data={this.state.keyTag} updateFilterStatus={this.updateFilterStatus} />
                    <ReviewList list={this.state.filterReviews} />
                </div>
            </div>
        )

    }

}


ReactDom.render(<App />, document.getElementById('app'));
