// function App() {
//   return (
//       <h1>Hello</h1>
//   );
// }

// export default App;

import React, { Component } from "react";
import Ninjas from "./NInjas";
import Form from "./Form";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// person:{name:"Pradeep",age:25,belt:"Red"},
			people: [
				{ name: "Pradeep", age: 25, belt: "Red" },
				{ name: "Ram", age: 5, belt: "Green" },
				{ name: "Shyam", age: 13, belt: "Blue" },
			],
		};
    this.handleSubmit=this.handleSubmit.bind(this)
	}

	handleSubmit(person) {
		console.log(person);
		this.setState({
			people: [...this.state.people, person],
		});
		console.log(this.state);
	};
	removePeople = (id) => {
		console.log("");
		this.setState({
			people: this.state.people.filter((person) => person.name !== id),
		});
	};
	render() {
		// console.log(this.state)
		return (
			<div className="App">
				<h1>Hello</h1>
				<p>******Welcome********</p>
				{/* <Ninjas person={this.state.people[0]}></Ninjas>
      <p>****************</p>
      <Ninjas person={this.state.people[1]}></Ninjas>
      <p>****************</p>
      <Ninjas person={this.state.people[2]}></Ninjas>
      <p>****************</p> */}

				{/* <div>
        {this.state.people.map((person)=>{return (<Ninjas key={person.name} person={person}/>)})}
      </div> */}

				<Ninjas
					people={this.state.people}
					removePeople={this.removePeople}
				></Ninjas>
				<Form handleSubmit={this.handleSubmit}></Form>
			</div>
		);
	}
}

export default App;
