import React, {Component} from  'react';

class Listcontainer extends Component{

    constructor(props){
        super(props);

        setTimeout(() => {
            console.log(this.props.videos);

        }, 6000 );

        
    }

    render(){
       
       return ( 
       <ul className="col-md-4  list-group">
           {this.props.videos[1].kind}
        </ul>
        );
    }
}

export default Listcontainer;