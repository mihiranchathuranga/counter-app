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
             <span>Hello World</span>
             <button>Increment</button>
            </div>
        )
                }
        }
 
//exporting the Counter
export default Counter ;
