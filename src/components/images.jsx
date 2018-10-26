import React from "react";

class Image extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={this.props.images} alt="randomPic"></img>
                </div>
                <div>
                    <h3 className="quoteFont">"{this.props.quote}"</h3>
                </div>
                <div>
                    <button onClick={this.props.refresh} type="button" className="btn btn-primary btn-lg btn-block button titleFont">Inspire Me</button>
                </div>
            </div>
        )
    }
}

export default Image;