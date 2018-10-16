

import React 							from 'react';
import { Provider } 			from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import store 							from '../store.js';


const App = () => (
	<Provider store={store}>
		<Grid>
			<Row>
				<Col md={12}>Empty spaces! -</Col>
			</Row>
		</Grid>
	</Provider>
);

export default App;