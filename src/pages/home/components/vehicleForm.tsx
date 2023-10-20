import React, { useCallback } from 'react';
import Input from '@/components/form/input';
import { Controller, useForm } from 'react-hook-form';
import Select from '@/components/form/select';
import CheckBox from '@/components/form/checkbox';
import Button from '@/components/form/button';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface VehicleFormProps {
	handleShowModal: () => void;
}

interface Data {
	brand?: boolean;
	color: string;
	dors: string;
	fuel: string;
	model: string;
	modelNumber: string;
	price: string;
	year: string;
}

const schema = yup.object().shape({
	brand: yup.mixed(),
	color: yup.string().required(),
	dors: yup.string().required(),
	fuel: yup.string().required(),
	model: yup.string().required(),
	modelNumber: yup.string().required(),
	price: yup.string().required(),
	year: yup.string().required()
});

const fuel = ['FLEX', 'GASOLINA', 'DIESEL', 'GÁS', 'ELÉTRICO'];

const VehicleForm = ({ handleShowModal }: VehicleFormProps): JSX.Element => {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			model: '',
			color: '',
			year: '',
			dors: '',
			fuel: '*',
			price: '',
			modelNumber: '',
			brand: ''
		},
		resolver: yupResolver(schema)
	});

	const vehiclesPost = useCallback(
		({ color, dors, fuel, model, modelNumber, price, year, brand }: Data) => {
			const formData = {
				id: crypto.randomUUID(),
				timestamp_cadastro: new Date()?.getTime(),
				modelo_id: modelNumber,
				ano: +year,
				combustivel: fuel,
				num_portas: +dors,
				cor: color,
				nome_modelo: model,
				valor: +price,
				brand: brand ? 1 : 0
			};

			const carList = JSON.parse(localStorage.getItem('carList') || '[]');

			localStorage.setItem('carList', JSON.stringify([...carList, formData]));

			handleShowModal();
		},
		[]
	);

	return (
		<form method='post' onSubmit={handleSubmit(vehiclesPost)}>
			<div className='w-full my-2'>
				<Controller
					render={({ field, fieldState: { error } }) => (
						<Input
							type='text'
							label='Modelo'
							placeholder='Modelo'
							error={error}
							{...field}
						/>
					)}
					name='model'
					control={control}
				/>
			</div>
			<div className='w-full my-2'>
				<Controller
					render={({ field, fieldState: { error } }) => (
						<Input type='text' label='Cor' placeholder='Cor' error={error} {...field} />
					)}
					name='color'
					control={control}
				/>
			</div>
			<div className='w-full my-2'>
				<Controller
					render={({ field, fieldState: { error } }) => (
						<Input
							type='number'
							label='Ano'
							placeholder='Ano'
							error={error}
							{...field}
						/>
					)}
					name='year'
					control={control}
				/>
			</div>
			<div className='w-full my-2'>
				<Controller
					render={({ field, fieldState: { error } }) => (
						<Input
							type='number'
							label='Número de Portas'
							placeholder='Número de Portas'
							error={error}
							{...field}
						/>
					)}
					name='dors'
					control={control}
				/>
			</div>
			<div className='w-full my-2'>
				<Controller
					render={({ field, fieldState: { error } }) => (
						<Select
							label='Combustível'
							placeholder='Combustível'
							defaultOptionLabel='Selecione o combustível'
							options={fuel.map((item) => ({
								label: `${item.charAt(0)}${item.slice(1).toLowerCase()}`,
								value: item
							}))}
							error={error}
							{...field}
						/>
					)}
					name='fuel'
					defaultValue=''
					control={control}
				/>
			</div>
			<div className='w-full my-2'>
				<Controller
					render={({ field, fieldState: { error } }) => (
						<Input
							type='number'
							label='Número do modelo'
							placeholder='Número do modelo'
							error={error}
							{...field}
						/>
					)}
					name='modelNumber'
					control={control}
				/>
			</div>
			<div className='w-full my-2'>
				<Controller
					render={({ field, fieldState: { error } }) => (
						<Input
							type='text'
							label='Valor'
							placeholder='Valor'
							error={error}
							{...field}
						/>
					)}
					name='price'
					control={control}
				/>
			</div>
			<div className='w-full my-2'>
				<Controller
					render={({ field, fieldState: { error } }) => (
						<CheckBox label='Marca' error={error} {...field} />
					)}
					name='brand'
					control={control}
				/>
			</div>
			<footer className='w-full flex justify-end'>
				<Button type='submit' className='btn-outline btn-success'>
					<PaperAirplaneIcon className='h-5 w-5' />
					Cadastrar
				</Button>
			</footer>
		</form>
	);
};
export default VehicleForm;
