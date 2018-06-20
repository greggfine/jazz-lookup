import React from 'react'

export default function Musician( {musicians}) {
	return (
		musicians.map(musician => {
			return <li 
						className="musician" 
						key={musician.name}
					>
					<p className="tc">{musician.name}</p>
					<img src={musician.image} alt="Pic of Musician"/>
					</li>
		})
	)
}