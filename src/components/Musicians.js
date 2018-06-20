import React from 'react'
import Musician from './Musician'

export default function Musicians({ musicians }) {
	return (
		<ul className="musician-grid"> 
			<Musician musicians={musicians} />
		</ul>
	)}
		
