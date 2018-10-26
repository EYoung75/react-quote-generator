import React from "react";

class Image extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={this.props.images} alt="randomPic"></img>
                </div>
                <div className="quoteFont">
                    <h3 className="quote">"{this.props.quote}"</h3>
                    <h2 className="author">-{this.props.author}</h2>
                </div>
                <div>
                    <button onClick={this.props.refresh} type="button" className="btn btn-primary btn-lg btn-block button titleFont">(Attempt to) Inspire Me</button>
                </div>
            </div>
        )
    }
}

export default Image;