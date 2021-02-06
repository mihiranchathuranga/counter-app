import React, { Component } from 'react';

//give Counter as component name
class  Counter extends Component {

    //define the state which contains with required data for component
    //define imageUrl
    state = {
        count: 0,
       
       };

    styles = {
        fontSize : 10,
        fontWeight: "bold"
    };
    
    //how to add img to div
    render() { 
        return (
            <div>
              
             <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
             <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        )
                }

 
formatCount(){
    //object destrcturing
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
    //return this.state.count === 0 ? 'Zero' : this.state.count;
}

}
 
//exporting the Counter
export default Counter ;
