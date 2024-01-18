import Container from './components/container/Container';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Container>
				<Header />
				<Main/>

			</Container>
		</>
	);
};

export default App;
