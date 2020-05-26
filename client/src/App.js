import React, { Component } from 'react';
import { removeEntry, getSavedEntries, saveEntry } from "./utils/API";
import "./style.css";
import NewEntryModal from "./components/NewEntryModal";

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

  testPost = () => {
    let testObject = {
      calories: 10,
      protein: 1,
      weight: 50
    }

    saveEntry(testObject)
    .then(res => {
        console.log(res)
        this.handleGetSavedEntries();
        alert("New Entry Added!");
    });
  }

  // handleSubmit = (event) => {                =>   use this in a modal   <=
  //   event.preventDefault();
  //   const newEntry = {
  //       calories: caloriesRef.current.value,
  //       protein: proteinRef.current.value,
  //       weight: weightRef.current.value,
  //   };

  //   console.log(newEntry);
  //   saveEntry(newEntry)
  //       .then(res => {
  //           console.log(res)
  //           this.handleGetSavedEntries();
  //       });
  // 
  // }

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
                <div className="row">
                  <div className="col-sm-3">
                    <h3 className="entry">Date: {entry.date}</h3>
                  </div>
                  <div className="col-sm-3">
                    <h3 className="entry">Calories: {entry.calories} kCal</h3>
                  </div>
                  <div className="col-sm-3">
                    <h3 className="entry">Protein: {entry.protein} grams</h3>
                  </div>
                  <div className="col-sm-3">
                    <h3 className="entry">Weight: {entry.weight} lbs</h3>
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
