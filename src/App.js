import NavBar from './components/navbar';
import './App.css';
import Counters from "./components/counters"
import React from 'react';

class App extends React.Component {
  state ={
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
};

  render() { 
    return (
      <React.Fragment>
      <NavBar
      totalCounters={this.state.counters.length}/> {/* or totalCounters={this.state.counters.filter(c=> c.value > 0).length} */}
      <main className="container">
       <Counters
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        />
      </main>
      </React.Fragment>
    );
  }
}
 
export default App;