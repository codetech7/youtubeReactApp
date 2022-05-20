// const React = require('react');
// const ReactDOM = require('react-dom');
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './components/';
import youtubeQuery from 'youtube-api-search';
import Listcontainer from './components/listContainer';
import regeneratorRuntime from "regenerator-runtime";

const API_PRIVATE_KEY = 'AIzaSyCIiKrXKCgURNlqTQGtnvUZRcLuIVnVrLE';

class App extends Component {

  constructor(props){
    super(props);

    (() => {
        
        setTimeout(() => {
          
           youtubeQuery({key: API_PRIVATE_KEY, term: 'chess'}, (youtubeVideos) => {
            this.setState({videos:youtubeVideos});
          });
  
        }, 3000);
      
    }
    )();

    this.state = {
      videos: [], 
      searchterm: 'teju'
     };
  }

  render(){
  return (
  <div>
     <Searchbar search = {this.state.searchterm} />
     <Listcontainer  videos = {this.state.videos} />
   </div>
  );

  }
}


ReactDOM.render(<App />, document.querySelector(".container"));