import React, { Component } from 'react';
import { removeEntry, getSavedEntries, saveEntry } from "./utils/API";
import "./style.css";

class App extends Component {

  state = {
    entries: []
  }

  componentDidMount() {
    this.handleGetSavedEntries();
  }

  handleGetSavedEntries = () => {
    console.log("Getting saved entries...")
    getSavedEntries().then((res) => {
      this.setState({ entries: res.data })
    }).catch(err => console.log(err));
  }

  render() {  
    return (
      <div>
          {!this.state.entries.length ? (
            <h2>No entries listed.</h2>
          ) : (
              this.state.entries.map(entry => {
                return(
                  <div>
                    <h2>ENTRY DATE: {entry.date}</h2>
                    <h3>{entry.calories} calories</h3>
                    <h3>{entry.protein} grams of protein</h3>
                    <h3>You performed these workouts: {entry.workouts}</h3>
                    <h3>You weigh {entry.weight} pounds at this date</h3>
                  </div>
                );
              })
            )}
      </div>
    );
  }
}

export default App;
