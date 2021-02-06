import React, { Component } from 'react';

//give Counter as component name
class  Counter extends Component {

    //define the state which contains with required data for component
    //define imageUrl
    state = {
        count: 0,
       
       };
    //we can use this way to apply styles
   
    
    //how to add img to div
    //set the button color change.how to do it
    render() { 
       // let classes = this.getBadgeClasses();
        return (
            <div>
              
             <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
             <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        )
                }

 
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
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
