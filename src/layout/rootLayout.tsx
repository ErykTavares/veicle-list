import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/header';

const RootLayout = (): JSX.Element => {
	return (
		<>
			<Header />
			<main className='w-full h-screen flex justify-center bg-[#f3f3f3]'>
				<Outlet />
			</main>
		</>
	);
};
export default RootLayout;
