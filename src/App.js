// import React, { Component } from 'react';
import data from './Data.js';
import Details from './Details';
import Search from './Search';
import './App.css'
import { useState } from 'react';

function App() {
	
			
	const [anim,setdata] = useState([...data]);
	const [searchfield, setsearch] = useState('');

	
	
	onchange=(event)=>{
		setsearch(event.target.value);
		
		// console.log(filterr);
	}

		const filterr = anim.filter(data =>{
			return data.name.toLowerCase().includes(searchfield.toLowerCase())}
				);
		
		return(
			<div className='tc '>
				<h1 className='f1'>THE JUNGLE BOOK</h1>
				<Search change={onchange}/>
				
				<Details data={filterr}/>
				
			</div>


		);  
	}



export default App;