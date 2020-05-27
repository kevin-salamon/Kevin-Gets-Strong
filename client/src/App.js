import React, { Component } from 'react';
import { removeEntry, getSavedEntries, updateEntry } from "./utils/API";
import "./style.css";
import NewEntryModal from "./components/NewEntryModal";
import UpdateEntryModal from "./components/UpdateEntryModal";

class App extends Component {

  state = {
    entries: []
  }

  componentDidMount() {
    this.handleGetSavedEntries();
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
      <NewEntryModal
        handleGetSavedEntries={this.handleGetSavedEntries}
      />

      <div className="container entries-list">

        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center" style={{fontSize: "1.8em", margin: "3%", padding: "1px"}}>Your current stats:</h1>
          </div>
        </div>

        {!this.state.entries.length ? (
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center" style={{fontSize: "1.8em", margin: "1%", padding: "1%"}}>No active dates yet. Add today's stats to get started!</h1>
            </div>
        </div>
        ) : (
            this.state.entries.map(entry => {
              return(
                <div className="row" key={entry._id} id={entry._id}>
                  <div className="col-sm-2">
                    <h3 className="entry">Date: {entry.date}</h3>
                  </div>
                  <div className="col-sm-2">
                    <h3 className="entry">Calories: {entry.calories} kCal</h3>
                  </div>
                  <div className="col-sm-2">
                    <h3 className="entry">Protein: {entry.protein} grams</h3>
                  </div>
                  <div className="col-sm-2">
                    <h3 className="entry">Weight: {entry.weight} lbs</h3>
                  </div>
                  <div className="col-sm-2">
                    <UpdateEntryModal
                      handleGetSavedEntries={this.handleGetSavedEntries}
                    />
                  </div>
                  <div className="col-sm-2">
                    <button style={{width: "100%"}} onClick={() => this.handleRemoveEntry(entry._id)}>Delete</button>
                  </div>
                </div>
              )
            })
          )}
      </div>
      </>
    );
  }
}

export default App;
