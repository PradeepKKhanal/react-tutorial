import { Component } from "react";

class Form extends Component {
	state = {
		name: "",
		age: "",
		belt: "",
	};
    // handleChange=(e) =>{
	// 	console.log(this);
	// }
    handleChange=(e)=>{
		// console.log(this.state);
        this.setState({[e.target.name]:e.target.value})
        // console.log('hello')
        // console.log(this.state);
	}

	handleSubmit=(e) =>{
		e.preventDefault();
        // console.log(this.state);
        // console.log(this.props)
        // this.props.set({people:[...this.props.people,this.state]})
        this.props.handleSubmit(this.state)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h1>Fill the form</h1>
				<label htmlFor="name">Name</label>
				<input
					type="text"
                    id="name"
					name="name"
					value={this.state.name}
					onChange={this.handleChange}
				/>
				<br />
				<label htmlFor="age">Age</label>
				<input
					type="text"
					name="age"
					value={this.state.age}
					onChange={this.handleChange}
				/>
				<br />
				<label htmlFor="belt">Belt</label>{" "}
				<input
					type="text"
					name="belt"
					value={this.state.belt}
					onChange={this.handleChange}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default Form;
