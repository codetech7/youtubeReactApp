// const React = require('react');
// const ReactDOM = require('react-dom');
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './components/';
import youtubeQuery from 'youtube-api-search';

const API_PRIVATE_KEY = 'AIzaSyCIiKrXKCgURNlqTQGtnvUZRcLuIVnVrLE';

youtubeQuery({key: API_PRIVATE_KEY, term: 'chess'}, (videos) => { //get data from the parent component
  console.log(videos[0].etag);
})


class App extends Component {

  render(){
  return (
  <div>
     <Searchbar />
   </div>
  );

  }
}


ReactDOM.render(<App />, document.querySelector(".container"));