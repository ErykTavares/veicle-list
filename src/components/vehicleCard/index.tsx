import React from 'react';
import { Car } from '@/pages/home';
import './style.scss';

const VehicleCard = ({ valor, nome_modelo, ano, cor, brand }: Car) => {
	return (
		<div className='vehicle-card max-w-md w-[300px] h-[350px] mx-auto bg-white rounded-xl overflow-hidden shadow-md'>
			<img
				className='w-full h-48 object-cover'
				src='https://img.freepik.com/fotos-gratis/carro-luxuoso-branco-que-esta-no-traco-de-corrida-vista-lateral-do-sedan-do-esporte_114579-1161.jpg'
				alt='Card'
			/>
			<div className='p-6'>
				{brand ? (
					<div className='uppercase tracking-wide text-xs text-[#fc8422] font-semibold'>
						Ferrari
					</div>
				) : null}
				<h2 className='text-xl font-semibold mt-2'>{nome_modelo}</h2>
				<p className='mt-2 text-gray-600'>Cor - {cor}</p>
			</div>
		</div>
	);
};

export default VehicleCard;
