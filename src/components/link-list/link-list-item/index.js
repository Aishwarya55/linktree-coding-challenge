import React, { Component } from 'react'
import LinkInfoAccordian from "../../link-info-accordian"
import MusicPlayer from "../../music-player"
import bySongkick from "../../../assets/img/by_Songkick.svg"

class LinkListItem extends Component {

    constructor(props) {
        super(props);

        //TODO : showTopComponent and showBottomComponent must be initialized based on the dynamic component
        this.state = {
            data: this.props.data,
            userPreference: {
                background: "#66E19C",
                color: "#fff"
            },
            hover: false,
            showTopComponent: false,
            showBottomComponent: true,
            componentProperties: {}
        }
    }

    //TODO: Use CONSTANTS for link type
    topComponent = {
        "classic": () => null,
        "music": (props) => <MusicPlayer {...props} {...this.state.data.properties.musicPlayer}/>,
        "shows": () => null
    }

    bottomComponent = {
        "classic": () => null,
        "music": () => null,
        "shows": () => <div className="showProvider"><img src={bySongkick} alt="logo"/></div>
    }

    toggleHover() {
        this.setState({ ...this.state, hover: !this.state.hover })
    }

    handleClick() {
        //TODO: Use CONSTANTS for link type
        const {data} = this.state
        if (data.type !== "classic") {
            this.setState({
                ...this.state,
                data: {
                    ...data,
                    isOpen: !data.isOpen,
                    
                },
                showTopComponent: false,
                showBottomComponent: true
            })
        } else {
            window.open(data.properties.url, "_blank")
        }
    }

    //TODO: Move External list item click to a common state (common context or state management)
    handleExternalListItemClick(componentProperties){
        const {data} = this.state

        //TODO: Use CONSTANTS for link type
        if(data.type === "music"){
            this.setState({
                ...this.state,
                showTopComponent: !this.state.showTopComponent,
                componentProperties
            })
        }else if(data.type === "shows"){
            window.open(componentProperties.url, "_blank")
        }
    }

    render() {
        const { userPreference: {
            color,
            background,
        },
            hover,
            data
        } = this.state;
        
        const linkStyle = {
            background: hover ? color : background,
            color: hover ? background : color,
            border: `2px solid ${background}`
        }

        const TopComponent = this.topComponent[data.type]

        const BottomComponent = this.bottomComponent[data.type]

        //TODO: Use CONSTANTS for link type
        return <>
            <div className="links" style={linkStyle} onClick={() => this.handleClick()} onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()}>
                {data.header}
            </div>
            {data.type !== "classic" && data.isOpen && <LinkInfoAccordian 
            data={data} 
            showTopComponent={this.state.showTopComponent}
            showBottomComponent={this.state.showBottomComponent}
            handleExternalListItemClick={(d) => {this.handleExternalListItemClick(d)}}
            topComponent = {<TopComponent {...this.state.componentProperties}/>}
            bottomComponent = {<BottomComponent />}
            />}
        </>
    }
}

export default LinkListItem