import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function Details() {
	const [data, setData] = useState(null);

	const location = useLocation();
	const baseUrl = `https://api.spacexdata.com/v4/launches/${location.state.mainData}`;
	fetch(baseUrl)
		.then((response) => {
			return response.json();
		})
		.then((actualData) => {
			console.log(actualData);
			setData(actualData);
		});

	return (
		<div>
			{data && (
				<div>
					<h1>{data.name}</h1>
					<h2>{data.details}</h2>
					<h3>{data.date_local}</h3>
				</div>
			)}
		</div>
	);
}

export default Details;
