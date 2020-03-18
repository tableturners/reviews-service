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
        this.state = {
            isClicked: false,
        }
        // this.onChange = this.onChange.bind(this);
    }

    // onChange(event){
    //     this.setState({isClicked:event.target.checked})
    //     console.log(event.target.checked);
    // }

    render() {
        console.log(this.props.tag)
        return (
            <div>
                <div className='filterEntry'>
                    <input type="checkbox" onChange={this.props.updateFilterStatus} />
                    {this.props.tag}
                </div>
            </div>
        )
    }

}



export default CheckBoxFilterEntry;