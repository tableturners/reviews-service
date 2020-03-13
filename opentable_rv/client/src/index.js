import React from 'react';
import ReactDom from 'react-dom';
//import App from './App.jsx';
import $ from 'jquery';
import { ajax } from 'jquery';
import ReviewList from './ReviewList.jsx';
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
        $.get('/api/reviewlist', (rows) => {
            this.setState({
                review: rows
            })
        })
    }
    // randomDate(start, end) {
    //     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
    //   }
      
     

    render() {
        
        console.log(this.state);
        return (
            <div>
                <h1>ReviewList</h1>
                <div>
                    <ReviewList list={this.state.review} />
                </div>
            </div>
        )

    }

}


ReactDom.render(<App />, document.getElementById('app'));