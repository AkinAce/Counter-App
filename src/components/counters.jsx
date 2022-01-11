import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {
/* state ={
     counters: [  //An array of the imported counter component with id and initialized value assigned to each one
         { id: 1, value: 0 },
         { id: 2, value: 3 },
         { id: 3, value: 0 },
         { id: 4, value: 5 }
     ]
 };   

 handleIncrement = counter => {
  const counters =[...this.state.counters];
  const index = counters.indexOf (counter);
  counters[index] = {...counter};
  counters[index].value++;
  this.setState({ counters });
 }

 handleDecrement = counter  =>  {
    const counters =[...this.state.counters];
    const index = counters.indexOf (counter);
    counters[index] = {...counter};
    if(counters[index].value>=1){counters[index].value--;}; //stops decrement below zero
    this.setState({ counters });
   }

 handleReset = () => {
     const counters = this.state.counters.map(c=> {
         c.value = 0;
         return c;
     });
     this.setState({ counters });
 };

 handleDelete = counterId => {
  const counters= this.state.counters.filter(c => c.id !== counterId);
  this.setState ({counters});
 };*/
    //state before being lifted to App.js
    render() { 
        //const{ onReset, counters, onDelete, onIncrement, onDecrement } = this.props;    // destructuring in order to remove "this.props." in front of the events handlers
        return (
            <div>
             <button
             onClick={this.props.onReset} 
             className= "btn btn-primary btn-sm m-2">Reset</button>
             
            {/*< Counter />*/} {/* Hardcoding the counter component. deleted when local state was removed */}

            {this.props.counters.map(counter =>(
            <Counter
            key= {counter.id}
            onDelete={this.props.onDelete}    
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            value={counter.value}
            id={counter.id}
            counter={counter}
            />
            ))} {/* Rendering the counter component dynamically from the array in state and setting an id and starting value to each*/}
                {/*onDelete is received from a raised event in parent component. Passed to handleDelete function to execute removal of the counter when delete button is clicked in parent component*/}
                {/*onDelete={this.handleDelete}*/} {/*same for increment and co before state was lifted*/}
        </div>);
    }
}
 
export default Counters;