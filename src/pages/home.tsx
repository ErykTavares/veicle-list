import VehicleList from '@/components/vehicleList';
import React, { useState } from 'react';

export interface Car {
	id: number;
	timestamp_cadastro: number;
	modelo_id: number;
	ano: number;
	combustivel: 'FLEX' | 'GASOLINA' | 'DIESEL' | 'GÁS' | 'ELÉTRICO';
	num_portas: number;
	cor: string;
	nome_modelo: string;
	valor: number;
	brand?: number;
}

const mock: Car[] = [
	{
		id: 55,
		timestamp_cadastro: 1696549488,
		modelo_id: 88,
		ano: 2014,
		combustivel: 'FLEX',
		num_portas: 4,
		cor: 'BRANCA',
		nome_modelo: 'ETIOS',
		valor: 36.0,
		brand: 1
	},
	{
		id: 23,
		timestamp_cadastro: 1696531236,
		modelo_id: 77,
		ano: 2014,
		combustivel: 'FLEX',
		num_portas: 4,
		cor: 'PRETO',
		nome_modelo: 'COROLLA',
		valor: 120.0,
		brand: 1
	},
	{
		id: 3,
		timestamp_cadastro: 16965354321,
		modelo_id: 79,
		ano: 1993,
		combustivel: 'DIESEL',
		num_portas: 4,
		cor: 'AZUL',
		nome_modelo: 'HILLUX SW4',
		valor: 47.5,
		brand: 1
	},
	{
		id: 1,
		timestamp_cadastro: 1696539488,
		modelo_id: 12,
		ano: 2015,
		combustivel: 'FLEX',
		num_portas: 4,
		cor: 'BEGE',
		nome_modelo: 'ONIX PLUS',
		valor: 50.0
	},
	{
		id: 2,
		timestamp_cadastro: 1696531234,
		modelo_id: 14,
		ano: 2014,
		combustivel: 'FLEX',
		num_portas: 4,
		cor: 'AZUL',
		nome_modelo: 'JETTA',
		valor: 49.0
	},
	{
		id: 3,
		timestamp_cadastro: 16965354321,
		modelo_id: 79,
		ano: 1993,
		combustivel: 'DIESEL',
		num_portas: 4,
		cor: 'AZUL',
		nome_modelo: 'HILLUX SW4',
		valor: 47.5
	}
];

const Home = () => {
	const [vehicles, setVehicles] = useState<Car[]>(mock);

	return (
		<section className='w-full h-screen pt-3 flex flex-col items-center justify-start'>
			<h2 className='text-lg font-semibold'>Catálogo</h2>

			<VehicleList vehicles={vehicles} />
		</section>
	);
};

export default Home;
