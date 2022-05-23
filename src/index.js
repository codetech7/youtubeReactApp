// const React = require('react');
// const ReactDOM = require('react-dom');
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './components/';
import youtubeQuery from 'youtube-api-search';
import Listcontainer from './components/listContainer';
import regeneratorRuntime from "regenerator-runtime";
import VideoPanel from './components/videoPanel';

const API_PRIVATE_KEY = 'AIzaSyCIiKrXKCgURNlqTQGtnvUZRcLuIVnVrLE';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos : [], 
      selectedVideo: [],
      searchterm: 'juju'
     };
  
          
    // this.myFirstFunction("juju"); 

    }

    setVideo = (passedVideo)=> {
      this.setState({selectedVideo: passedVideo});
    }


    myFirstFunction = (term1) => {
      youtubeQuery({key: API_PRIVATE_KEY, term: term1}, (youtubeVideos) => {
        this.setState({videos:youtubeVideos});
        this.setState({searchterm: term1});
      });
    }


  render(){
  return (
  <div>
     <Searchbar searchFunction = {this.myFirstFunction} />
     <Listcontainer  videos = {this.state.videos} setVideo = {this.setVideo} />
     <VideoPanel videos = {this.state.selectedVideo}/>
     
   </div>
  );

  }

}

ReactDOM.render(<App />, document.querySelector(".container"));