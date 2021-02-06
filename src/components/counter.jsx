import React, { Component } from 'react';

//give Counter as component name
class  Counter extends Component {

    //define the state which contains with required data for component
    state = {
        count: 0,
       };
    
    
    render() { 
        return (
            <div>
             <span>{this.state.count}</span>
             <button>Increment</button>
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
