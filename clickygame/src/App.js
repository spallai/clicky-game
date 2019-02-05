import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import friends from "./friends.json"
import './App.css';
import FriendCard from './components/FriendCard';

function shuffleFriends(friends) {
  let i = friends.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = friends[i]; friends[i] = friends[j]; friends[j] = temp;
  }
  return friends;
}

class App extends Component {

  state = {
    friends,
    score: 0,
    topScore: 0,
    winLose: "",
    friendClicked: [],
  };

  handleClick = id => {

    if (this.state.friendClicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ friendClicked: this.state.friendClicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      winLose: ""
    });
    if (newScore === 12) {
      this.setState({
        winLose: "You win!"
      });
    }
    else if (newScore >= this.state.topScore) {
      this.setState({
        topScore: newScore
      })
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      winLose: "Try again!",
      friendClicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Navbar score={this.state.score}
            topScore={this.state.topScore}
            winLose={this.state.winLose} />

          <div className="wrapper">
            {this.state.friends.map(friend => (
              <FriendCard
                id={friend.id}
                key={friend.id}
                image={friend.image}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
              />

            ))}
          </div>

        </div>
      </Router>
    );

  }
}
export default App;
