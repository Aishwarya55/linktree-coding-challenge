import React, { Component } from 'react'
import "./link-list.css"
import LinkListItem from "./link-list-item"

class LinkList extends Component{

   constructor(props){
       super(props)

       this.state = {
        openedLinks: [],
        data: this.props.data.map(d => 
            ({
                ...d,
                isOpen: false
            })
        )
    }
   }

   componentDidMount(){

   }

   render(){
      return this.state.data.map((d, index) => {
           return <LinkListItem key={index} data={d} />
       })
   }
}

export default LinkList