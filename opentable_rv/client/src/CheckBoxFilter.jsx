import React from 'react'
import keyTagMaker from './helpers/keyTagMaker.js'
import CheckBoxFilterEntry from './CheckBoxFilterEntry.jsx'
import "./CheckBoxFilter.css"
class CheckBoxFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        console.log(this.props.data);

        const checkBoxFilterEntries = [];
        for (let i = 0; i < this.props.data.length; i++) {
            const currentTag = this.props.data[i];
            const checkBoxFilterEntry = (
                <CheckBoxFilterEntry 
                    tag={currentTag}
                    key={currentTag}
                    updateFilterStatus={this.props.updateFilterStatus}
                />);
            checkBoxFilterEntries.push(checkBoxFilterEntry);
        }

        return (
            <div className="CheckBox-list">
            <div>Filters
                {checkBoxFilterEntries}

                {/* {
                    this.props.data.map((tag) => <CheckBoxFilterEntry tag={tag} key={tag}  updateFilterStatus={this.props.updateFilterStatus}/>)
                } */}
            </div>
            </div>
        )
    }

}


export default CheckBoxFilter