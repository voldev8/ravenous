import React, { Component } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends Component {
  constructor(props) {
    super();
    this.state = { businesses: [] };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({ businesses: businesses });
    });
  }
  render() {
    return (
      <div className="App">
        <h1>RavenouS</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;

// Below is a list of some potential features to add to Ravenous:

//     Make addresses clickable and have them open the address in Google Maps in a new tab //done
//     Make images clickable and have them open the business’ website in a new tab //done
//     Clicking on a different sorting option automatically requires the Yelp API, rather than having to manually click “Let’s Go” again //done
//     Implement your own type of sort (for example, by entering a distance or radius from a central location) //done
//     Allow you to search by pressing “Enter” (or “Return”) on your keyboard, as opposed to manually clicking //done
//     Add autocompletion of addresses to the “Location” input
