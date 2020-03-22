import React from 'react';
import "./DropDownRating.css"
import * as constants from './helpers/constants.js';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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


class DropDownRating extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.selectDropDownOption(e.target.value)
    }


    render() {
        return (

            <div className="dropDown">
                <h1 className='header'>Sort by</h1>
                <FormControl variant="outlined">
                    <InputLabel  id="demo-simple-select-outlined-label"></InputLabel>
                    <Select
                        className="hover"
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        defaultValue={constants.HIGHEST_RATING}
                        onChange={this.handleChange}

                    >

                        <MenuItem value={constants.NEWEST_RATING}>newest rating</MenuItem>
                        <MenuItem value={constants.HIGHEST_RATING}>highest rating</MenuItem>
                        <MenuItem value={constants.LOWEST_RATING}>lowest rating</MenuItem>
                    </Select>
                </FormControl>


            </div>
        )
    }

}

export default DropDownRating