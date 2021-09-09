import './Search.css'
function Search({change}){
	return(
		<div className='pa2'>
			<form>
				<label for="search">Search Animals</label>
				<input id="search" type="search" pattern=".*\S.*" required onChange={change}/>
				<span class="caret"></span>
			</form>
			{/*<input className='pa2 ba b--green bg-lightest-blue br2' 
			type='search' placeholder='search animals' onChange={change}/>*/}
		</div>

	);
}


export default Search;