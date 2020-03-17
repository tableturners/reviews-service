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
            
        }
    }

    onChange(e){

    }

    render() {
        return (
            <div>
                <div className='filterEntry'>
                    <input type="checkbox" onChange={this.onChange} />
                    {this.props.tag.key}
                </div>
            </div>
        )
    }

}



export default CheckBoxFilterEntry;