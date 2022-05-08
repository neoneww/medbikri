import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const ActionButton = styled.button`
	margin: 0 5px;
	padding: 8px 14px;
	background: purple;
	color: yellow;
	cursor: pointer;
	border: 1px solid #fff;
	outline: 0;
	font-weight: 300;
	:hover {
		opacity: 0.8;
	}
`;
const Title = styled.h2`
	color: orange;
	font-weight: 300;
`;
const Status = styled.div`
	color: red;
	font-weight: 600;
	margin: 6px 0;
`;
const Description = styled.p`
	color: black;
	font-weight: 300;
`;

function Card(props) {
	const navigate = useNavigate();

	function ChangePage(listNo) {
		const mainData = props.launches[listNo];
		navigate('/info', { state: { mainData } });
	}

	return (
		<div style={{ color: 'black' }}>
			<Title>{props.full_name}</Title>
			<Status>{props.status}</Status>
			<Description>{props.details}</Description>
			{props.launches.length === 0 ? (
				<Status> No Launch Available </Status>
			) : (
				<div>
					<Title> Top 3 Launches </Title>
					<ActionButton
						onClick={() => {
							ChangePage(0);
						}}
					>
						{props.launches[0]}
					</ActionButton>
					<ActionButton
						onClick={() => {
							ChangePage(1);
						}}
					>
						{props.launches[1]}
					</ActionButton>
					<ActionButton
						onClick={() => {
							ChangePage(2);
						}}
					>
						{props.launches[2]}
					</ActionButton>
				</div>
			)}
		</div>
	);
}
export default Card;
