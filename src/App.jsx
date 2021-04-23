import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { RecordContextProvider } from './context/recordsContext';
import Profile from './pages/Profile';
import Record from './pages/Record';


function App() {
	return (
		<RecordContextProvider>
			<BrowserRouter>
				<div className="app">
					<Sidebar />
					<div className="main">
						<Navbar />
						<Switch>
							<Route path="/records">
								<Record />
							</Route>
							<Route path="/" exact>
								<Profile />
							</Route>
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		</RecordContextProvider>
	);
}

export default App;
