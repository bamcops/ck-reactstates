import React from 'react';
import './App.css';
 class App extends React.Component {
  state = {
    Person: {
      fullName: "Naruto Uzumaki",
      bio: "I just love ramen",
      img: "https://imgsrc.cineserie.com/2019/04/1235695.jpg?ver=1, width=200", 
      profession: "7th Hokage"
    },
    show: false,
    time:0
  };
  componentDidMount() {
    
    this.myInterval = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      });
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(setInterval)
  }

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <div className='App'>
        {this.state.show && (
          <>
          <h1>{this.state.time}</h1>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img className='he' src={this.state.Person.img} alt="Naruto"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
      </div>
    );
  }
}

export default App;