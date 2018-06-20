import React from 'react'

export default function Musician( {musicians}) {
	return (
		musicians.map(musician => {
			
				if(musician.image && musician.name !== "George Butler" &&
					musician.name !== "Sweets Edison" &&
					musician.name !== "Charles Davis" &&
					musician.name !== "Aretha Franklin" &&
					musician.name !== "Kenny Davern") {
					return  (
						<li 
							className="musician" 
							key={musician.name}
					>
					<p className="tc">{musician.name}</p>
					<img src={musician.image} alt="Pic of Musician"/>
					</li>

				)}
			
		})
	)
}