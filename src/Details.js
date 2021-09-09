import Card from './Card';

// import { data } from './Data';

function Details({data}){
	const loopi= data.map((user,i) => {
		return(
				< Card 
				key={i}
				name={data[i].name} 
				type={data[i].type}  
				height={data[i].height}  
				weight={data[i].weight} 
				source={data[i].source}
				/>

			);
	})


	return(
		<div >
			
		    {loopi}
	    </div>


		);
}

export default Details;