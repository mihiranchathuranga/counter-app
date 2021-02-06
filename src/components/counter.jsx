import React, { Component } from 'react';

//give Counter as component name
class  Counter extends Component {

    //define the state which contains with required data for component
    //define imageUrl
    state = {
        count: 0,
        tags: []       
       };
    renderTags(){
        if(this.state.tags.length === 0) return<p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    handleIncrement(){
        console.log('Increment Clicked');
    }
    render() { 
       // let classes = this.getBadgeClasses();
        return (
            <div>
             {/*conditional rendering second way */}
             {this.state.tags.length === 0 && "Please create a new tag!"}           
             {this.renderTags()}
            </div>
        )
                }

 
    

}
 
//exporting the Counter
export default Counter ;
