import React, {Component} from  'react';
import ListItem from "./listItems"

// class Listcontainer extends Component{

    // constructor(props){
    //     super(props);

    //     this.state = {array : []};

    //     this.state.array = props.videos.map(video=>{
    //       return  (<ListItem videoz = {video} />);
    //     });


    //     // setTimeout(() => {
    //     //     console.log(this.props.videos);

    //     // }, 6000 );

        
    // }



   const Listcontainer = (props) =>{

   const ListItems = props.videos.map(video=>{
         return  (<ListItem videoz = {video} key = {video.etag} />);
     });

     const arr = [1,2,3]
       
      //  console.log(this.props.videos); //ine was written to test console logging happening same time as rendering on screen
       return ( 
       <ul className="col-md-4  list-group">
           {ListItems}
        </ul>
        );
    }
// }

export default Listcontainer;