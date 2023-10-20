import React from 'react';
import { FieldError } from 'react-hook-form/dist/types/errors';

interface CheckBoxProps
	extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	label: string;
	error?: FieldError;
}

const CheckBox = React.forwardRef(
	(
		{ label, className, name, error, value, ...rest }: CheckBoxProps,
		ref: React.LegacyRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<div className='form-control w-max '>
				<label className='label cursor-pointer ' htmlFor={name}>
					<span className='label-text me-3'>{label}</span>
					<input
						ref={ref}
						id={name}
						type='checkbox'
						className='checkbox checkbox-accent'
						{...rest}
					/>
				</label>
			</div>
		);
	}
);
export default CheckBox;
