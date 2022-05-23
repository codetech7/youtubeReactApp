import React, {Component} from "react";


export default class ListItem extends Component{
constructor(props){
super(props);



}

render(){

    return(
    <li className = "list-group-item">

    <div className = "media-list">
        
        <div className = "media-left">
            
            <img className = "media-object" src = {this.props.videoz.snippet.thumbnails.default.url}/>

        </div>

        <div className = "media-body">
            
            <div className = "media-heading">{this.props.videoz.snippet.title}</div>

        </div>


    </div>


    </li>
    );
}
}