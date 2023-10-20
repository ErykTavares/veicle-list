import React from 'react';
import { Car } from '@/pages/home';
import './style.scss';
import formatCurrency from '@/utils/formatCurrency';

const VehicleCard = ({ valor, nome_modelo, num_portas, ano, cor, brand }: Car) => {
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
				<div className='w-full flex justify-between'>
					<h4 className='mt-2 text-gray-600 font-medium flex '>
						Cor<p className='ms-1 capitalize-first'>{cor.toLowerCase()}</p>
					</h4>
					<h4 className='mt-2 text-gray-600 font-medium flex '>Portas {num_portas}</h4>
				</div>
				<div className='w-full flex items-center justify-between mt-3'>
					<div className='w-[50%] flex items-start justify-start'>
						<div className='km-button me-3'>0 KM</div>
						<div className='km-button'>{ano}</div>
					</div>
					<p className='h-[30.38px] font-bold '>{`${formatCurrency(valor * 1000)}`}</p>
				</div>
			</div>
		</div>
	);
};

export default VehicleCard;
