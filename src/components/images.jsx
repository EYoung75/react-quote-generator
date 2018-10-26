import React from "react";

class Image extends React.Component{
    render() {
        return(
            <div>
                <img src={this.props.images}></img>
            </div>
        )
    }
}

export default Image;