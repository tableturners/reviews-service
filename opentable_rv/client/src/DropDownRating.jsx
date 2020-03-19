import React from 'react';
import "./DropDownRating.css"
import * as constants from './helpers/constants.js';

// const DropDownRating = (props) => {
//   console.log(props)
//   return (
//     <div className = "dropDown">  
//     <select>  
//     <option selected value="newest rating">newest rating</option>
//     <option value="hightest rating">highest rating</option>
//     <option value="lowest rating">lowest rating</option>
//     </select>
//     </div>
//   )

// }


class DropDownRating extends React.Component{
    constructor(props){
        super(props)
        this.state ={}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.selectDropDownOption(e.target.value)
    }


render(){
    return(
        <div className = "dropDown">  
    <select onChange={this.handleChange} defaultValue={constants.HIGHEST_RATING}>  
    <option value={constants.NEWEST_RATING}>newest rating</option>
    <option value={constants.HIGHEST_RATING}>highest rating</option>
    <option value={constants.LOWEST_RATING}>lowest rating</option>
    </select>
    </div>
    )
}

}

export default DropDownRating