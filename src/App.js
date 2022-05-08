import HomePage from './pages/HomePage';
import Details from './pages/Details';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route path='/info' element={<Details />} />
			</Routes>
		</Router>
	);
}

export default App;
