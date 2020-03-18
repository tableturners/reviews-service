import React from "react"
import "./CheckBoxFilterEntry.css"
// const CheckBoxFilterEntry = (props) => {
//     console.log("CE+++",props)
//     return (
//     <div>

//     <div className ='filterEntry'>
//         <input type="checkbox"/>
//         {props.tag.key}
//     </div>


//     </div>
//     )
// };


class CheckBoxFilterEntry extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleChange = this.handleChange.bind(this)
    }

  

    handleChange(event) {
        const isChecked = event.target.checked;
        this.props.updateFilterStatus(this.props.tag, isChecked);
    }

    render() {
        //console.log(this.props.tag)
        return (
            <div>
                <div className='filterEntry'>
                    <input type="checkbox" onChange={this.handleChange} />
                    {this.props.tag}
                   
                </div>
            </div>
        )
    }

}



export default CheckBoxFilterEntry;