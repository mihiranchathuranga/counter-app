import React, { Component } from 'react';

//give Counter as component name
class  Counter extends Component {

    //define the state which contains with required data for component
    //define imageUrl
    state = {
        count: 0,
        tags: ['tag1','tag2','tag3']       
       };
    renderTags(){
        if(this.state.tags.length === 0) return<p>There are no tags!</p>;
    }
    render() { 
       // let classes = this.getBadgeClasses();
        return (
            <div>           
             <ul>
               {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
             </ul>
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
