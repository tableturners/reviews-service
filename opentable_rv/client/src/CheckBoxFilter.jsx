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
        return (
            <div className="CheckBox-list">
            <div>Filters
                {
                    this.props.data.map(tag => <CheckBoxFilterEntry tag={tag} key={tag} />)
                }
            </div>
            </div>
        )
    }

}


export default CheckBoxFilter