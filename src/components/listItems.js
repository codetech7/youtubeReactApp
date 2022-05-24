import React, {Component} from "react";


export default class ListItem extends Component{
constructor(props){
super(props);



}


wasteMyLife() {
  this.props.setVideo(this.props.videoz);
}

render(){

    return(
    <li  onClick = {(ee)=>this.wasteMyLife(ee)} className = "list-group-item">

    <div className = "media-list">
        
        <div className = "media-left">
            
            <img className = "media-object" src = {this.props.videoz.snippet.thumbnails.default.url}/>

        </div>

        <div className = "media-body">
            
            <div className = "media-heading">{this.props.videoz.snippet.title}</div>

        </div>
        {/* <button onClick = {this.wasteMyLife()}>SelectVideo</button> */}


    </div>


    </li>
    );
}
}