import React, { Component } from 'react';
import { removeEntry, getSavedEntries, updateEntry } from "./utils/API";
import "./style.css";
import NewEntryModal from "./components/NewEntryModal";
import UpdateEntryModal from "./components/UpdateEntryModal";
import Moment from 'react-moment';
import 'moment-timezone';

class App extends Component {

  state = {
    entries: []
  }

  componentDidMount() {
    this.handleGetSavedEntries();
  }

  checkDatesAndRender() {
    let dateArray = [];

    for (let i = 0; i < this.state.entries.length; i++) {
      dateArray.push(this.state.entries[i].date);
    }

    let today = Date.now();
    // define a Date.now(), format both that and the dates in the dateArray. Then do if dateArray.includes(Date.now()) => render nothing, else render the add button
    
    if (dateArray.includes(today)) {
      return(<div></div>);
    } else {
      return(
      <div style={{display: "flex", justifyContent: "center", padding: "10px"}}>
        <NewEntryModal
            handleGetSavedEntries={this.handleGetSavedEntries}
        />
      </div>
      );
    }
  }

  handleGetSavedEntries = () => {
    getSavedEntries()
      .then((res) => {
        this.setState({ entries: res.data })
      })
      .catch(err => console.log(err));
  }

  handleRemoveEntry = entryId => {
    removeEntry(entryId)
      .then(this.handleGetSavedEntries)
      .catch(err => console.log(err));
  }
  
  handleUpdateEntry = (entryId, newEntryStatus) => {
    updateEntry(entryId, newEntryStatus)
      .then(this.handleGetSavedJobs)
      .catch(err => console.log(err));
  }

  render() {  
    return (
      <>
      <nav className="nav header-custom">
        <img src={require("./images/logo.png")} className="logo" alt={"logo"} />
      </nav>
      {this.checkDatesAndRender}
      <div className="container entries-list">

        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center intro-text">Your current stats:</h1>
          </div>
        </div>

        {!this.state.entries.length ? (
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center intro-text">No active dates yet. Add today's stats to get started!</h1>
            </div>
        </div>
        ) : (
            this.state.entries.map(entry => {
              const dateToFormat = entry.date;
              return(
                <>                
                <div className="row entry-row" key={entry._id}>
                  <div className="col-sm-2 entry-column">
                    <h3 className="entry">Date: <Moment format="MM/DD/YYYY">{dateToFormat}</Moment></h3>
                  </div>
                  <div className="col-sm-2 entry-column">
                    <h3 className="entry">Calories: {entry.calories} kCal</h3>
                  </div>
                  <div className="col-sm-2 entry-column">
                    <h3 className="entry">Protein: {entry.protein} grams</h3>
                  </div>
                  <div className="col-sm-2 entry-column">
                    <h3 className="entry">Weight: {entry.weight} lbs</h3>
                  </div>
                  <div className="col-sm-2 entry-column">
                    <h3 className="entry">Exercises: {entry.workouts}</h3>
                  </div>
                  <div className="col-sm-1 entry-column">
                    <UpdateEntryModal
                      handleGetSavedEntries={this.handleGetSavedEntries}
                      id={entry._id}
                    />
                  </div>
                  <div className="col-sm-1 entry-column">
                    <button style={{width: "100%"}} className="entry-button" onClick={() => this.handleRemoveEntry(entry._id)}>Delete</button>
                  </div>
                </div>
                </>
              )
            })
          )}
      </div>
      </>
    );
  }
}

export default App;
