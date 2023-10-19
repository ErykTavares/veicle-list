import React from 'react';
import Home from '@/pages/home';
import RootLayout from '@/layout/rootLayout';

interface Routes {
	path: string;
	element: React.JSX.Element;
	children?: Routes[];
}

const routes = (): Routes[] => [
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '',
				element: <Home />
			}
		]
	}
];

export default routes;
