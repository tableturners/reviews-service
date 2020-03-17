import React from 'react';
import ReactDom from 'react-dom';
//import App from './App.jsx';
import $ from 'jquery';
import { ajax } from 'jquery';
import ReviewList from './ReviewList.jsx';
import CheckBoxFilter from './CheckBoxFilter.jsx';
import keyTagMaker from './helpers/keyTagMaker.js'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            review: []
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
                review: rows
            })
        })
    }
    // randomDate(start, end) {
    //     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
    //   }
      
    

    render() {
        
        // console.log(keyTagMaker());
        return (
            <div>
                <h1>ReviewList</h1>
                <div>
                    <CheckBoxFilter data ={keyTagMaker()}/>
                    <ReviewList list={this.state.review} />
                </div>
            </div>
        )

    }

}


ReactDom.render(<App />, document.getElementById('app'));
