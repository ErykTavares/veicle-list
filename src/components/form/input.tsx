import React from 'react';
import { FieldError } from 'react-hook-form/dist/types/errors';

interface InputProps
	extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	label: string;
	error?: FieldError;
}

const Input = React.forwardRef(
	(
		{ label, className, name, error, ...rest }: InputProps,
		ref: React.LegacyRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<div className='form-control w-full '>
				{label ? (
					<label className='label' htmlFor={name}>
						<span className='label-text'>{label}</span>
					</label>
				) : null}
				<input id={name} className='input input-bordered w-full' {...rest} />
			</div>
		);
	}
);
export default Input;
