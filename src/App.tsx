import React, { useEffect } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './routes';

const App = (): JSX.Element => {
	const RoutesData = (): React.ReactElement<
		any,
		string | React.JSXElementConstructor<any>
	> | null => useRoutes(routes());

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', 'light');
	}, []);

	return (
		<BrowserRouter>
			<RoutesData />
		</BrowserRouter>
	);
};

export default App;
