import React, { Component } from 'react'
import "./external-link.css"

class ExternalLink extends Component {



    render() {
        return <>
            <div className="externalLinkContainer">
                {this.props.data.map((d, index) => {

                    return <div key={index} className="subCont">
                       {d.icon && <div>
                            <img src={d.icon} onClick={()=>{window.open(d.url, "_blank")}} height="30" width="30" alt="icon"/>
                        </div>}
                        <div className="extList" onClick={()=>{this.props.handleClick(d)}}>
                            <div>
                                <h4>{d.header}</h4>
                                {d.desc && <div className="desc">{d.desc}</div>}
                            </div>
                            <div>
                                &gt;
                        </div>

                        </div>

                    </div>
                })}

            </div>
        </>
    }

}

export default ExternalLink