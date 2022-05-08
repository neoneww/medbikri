import { useState, useEffect } from 'react';
import Card from '../components/Card';
import './Home.css';

function HomePage() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const baseUrl = 'https://api.spacexdata.com/v4/launchpads';

	useEffect(() => {
		fetch(baseUrl)
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				return response.json();
			})
			.then((actualData) => {
				//console.log(actualData);
				setData(actualData);
				setError(null);
			})
			.catch((err) => {
				console.log(err.message);
				setData(null);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div className='home-container'>
			{loading && <div>A momment please....</div>}
			{error && (
				<div>{`There is a problem fetching the post data - ${error}`}</div>
			)}
			<ul className='home-list'>
				{data &&
					data.map(({ id, full_name, details, status, launches }) => (
						<ul key={id}>
							<Card
								full_name={full_name}
								status={status}
								details={details}
								launches={launches}
							/>
						</ul>
					))}
			</ul>
		</div>
	);
}
export default HomePage;
