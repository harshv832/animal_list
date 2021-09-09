import './Card.css'
function Card({name,type,height,weight,source}){
	return (
			<div className=" tc w-50 dib inline bg-light-green ma3 br3 pa3 grow bw2 shadow-5 courier ">
				<img className="w-40 " alt="animal" src={source} />

				<h2> {name} </h2>
				<p> {type} <br/> Avg. height : {height} <br/> Avg. weight : {weight} </p>

			</div>


	);
}
export default Card;