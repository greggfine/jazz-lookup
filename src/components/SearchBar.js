import React from 'react'

export default function SearchBar( {handleChange, input}) {
	return (
		<input 
			className="db center" 
			type="search"
			placeholder="Enter Name"
			onChange={handleChange}
			value={input}
		/>
	)
}