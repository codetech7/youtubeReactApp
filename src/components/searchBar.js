import { defaults } from 'lodash';
import React, {Component} from 'react';

// const Searchbar = function () {
   
//         return <input  className= "search" />
   
// }

class Searchbar extends Component{
        constructor(props){
                super(props);

                this.state = {
                        inputContent : '',
                        inputClicks : 0,
                        buttonClicks : 0
                } 
                
                //the idea of states is that instead of creating several attribute variables, we can just create an object
                  //or mapping to store all the attributes and call that the state.
        }

        render(){
                return (
                        <div>
                                <input value = {this.state.inputContent} onChange={( event)=>{ //used to note when an input comes into the text field
                                        // console.log(event.target.value);
                                        this.setState({inputContent: event.target.value});
                                }} onClick={function (event){
                                        console.log(event.type);
                                }}/>

                                <button onClick={function (event){
                                        console.log(event);
                                }} />

                                <p value = ""/>
                        </div>
                )
        }
}

export default Searchbar;