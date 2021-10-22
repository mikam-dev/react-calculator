import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main'

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Main />
				<Footer />
			</div>
		</Router>
	)
}

export default App
