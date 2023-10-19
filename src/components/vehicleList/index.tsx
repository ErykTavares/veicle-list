import React from 'react';
import { Car } from '@/pages/home';
import VehicleCard from '../vehicleCard';
import './style.scss';

const VehicleList = ({ vehicles }: { vehicles: Car[] }): JSX.Element => {
	const vehicleWithBrand = vehicles.filter((fil) => fil.brand);
	const vehicleWithoutBrand = vehicles.filter((fil) => !fil?.brand);

	return (
		<div className='w-full flex flex-col items-center justify-start'>
			<div className='mt-3 vehicle-list-grid'>
				{vehicleWithBrand.map((item) => (
					<VehicleCard {...item} />
				))}
			</div>
			<div className='mt-3 vehicle-list-grid'>
				{vehicleWithoutBrand.map((item) => (
					<VehicleCard {...item} />
				))}
			</div>
		</div>
	);
};
export default VehicleList;
