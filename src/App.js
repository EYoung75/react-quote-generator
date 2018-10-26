import React, { Component } from 'react';
import './App.css';
import Image from "./components/images.jsx";

class App extends Component {
  constructor(){
    super()
    this.state = {
      images: []
    }
  }

  async componentDidMount() {
    const response = await fetch("https://picsum.photos/200/300/?random)")
    //const json = await response.json()
    this.setState({images: response.url})
    console.log(this.state.images)
  }
  render() {
    return (
      <div className="App">
        <Image images={this.state.images}/>
      </div>
    );
  }
}

export default App;
