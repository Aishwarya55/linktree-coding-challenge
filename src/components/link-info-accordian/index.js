import React, { Component } from 'react'
import ExternalLink from "../external-link"
import "./link-info-accordian.css"


class LinkInfoAccordian extends Component {

  

    render() {
  
        console.log(this.props, "prop passed")
        return <>
        <div >
            {this.props.showTopComponent && this.props.topComponent}
            <ExternalLink data={this.props.data.properties.listItems} handleClick={(d) => {
                this.props.handleExternalListItemClick(d)}} />
            {this.props.showBottomComponent && this.props.bottomComponent}
           </div>
        </>
    }
}

export default LinkInfoAccordian