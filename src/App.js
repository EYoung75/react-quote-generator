import React, { Component } from 'react';
import './App.css';
import Image from "./components/images.jsx";

class App extends Component {
  constructor(){
    super()
    this.state = {
      images: [],
      quotes: [],
      author: ""
    }
  }

  async componentDidMount() {
    const pictures = await fetch("https://picsum.photos/750/750/?random")
    //const json = await response.json()
    this.setState({images: pictures.url})
    const quotes = await fetch("https://talaikis.com/api/quotes/random/")
    const json = await quotes.json()
    this.setState({quotes: json.quote})
    const authors =["Marilyn Monroe", "Abraham Lincoln", "Mother Teresa", "John F. Kennedy", "Martin Luther King", "Nelson Mandela", "Winston Churchill", "Donald Trump", "Bill Gates", "Muhammad Ali", "Mahatma Gandhi", "Christopher Columbus", "Charles Darwin", "Elvis Presley", "Albert Einstein", "Vincent Van Gogh", "Franklin D. Roosevelt", "Thomas Edison", "Rosa Parks", "Oprah Winfrey", "Walt Disney", "Neil Armstrong", "Barack Obama", "J.K.Rowling", "Angelina Jolie", "Joseph Stalin", "Amelia Earhart", "Adolf Hitler", "Michael Jackson", "Madonna", "Steve Jobs", "Steve Jobs", "Usain Bolt", "Anne Frank", "Stephen Hawking", "Tom Cruise", "Spice Girls", "Backstreet Boys", "Jennifer Aniston", "Jennifer Lopez", "Kylie Jenner", "Kim Kardashian"]
    const randomAuthor = authors[Math.floor(Math.random()*authors.length)].toString()
    this.setState({author: randomAuthor})
  }


  handleClick(e) {
    window.location.reload(); 
  }


  render() {

    return (
      <div className="App">
        <h1 className="titleFont">(Not Exactly) Inspirational Quotes</h1>
        <Image images={this.state.images} refresh={this.handleClick} quote={this.state.quotes} author={this.state.author}/>
      </div>
    );
  }
}

export default App;
