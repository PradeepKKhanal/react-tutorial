import { Component } from "react";

const Ninjas =function({people,removePeople}) {
	
		// const person=this.props.person
		// const {person}=this.props
		// console.log(this.props)
		// console.log(person.name)

		// const { people } = props;
        const handleDelete=(id)=>{
            removePeople(id) 
        }
        console.log('trigger',people)
		return (
			<div>
				{/* <p>Name:{person?.name}</p>
                <p>Age:{person?.age}</p>
                <p>Belt:{person?.belt}</p>
                 */}
                

				{people.map((person) => {
					return person.age>=10? <div key={person.name}>
                        <p>Name:{person.name}</p>
                        <p>Age:{person.age}</p>
                        <p>Belt:{person.belt}</p>
                        <button onClick={()=>{handleDelete(person.name)}}>Delete</button>
                    </div>:null;
				})}

                
			</div>
		);
	}

export default Ninjas;
