import React, { ChangeEvent, SelectHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	options: { value: string; label: string }[];
	defaultValue?: string;
	className?: string;
	label: string;
	defaultOptionLabel?: string;
	error?: FieldError;
}

const Select = React.forwardRef(
	(
		{ options, className, name, label, defaultOptionLabel, ...rest }: SelectProps,
		ref: React.LegacyRef<HTMLSelectElement>
	) => {
		return (
			<div className='w-full flex flex-col items-start justify-start'>
				<label className='label' htmlFor={name}>
					<span className='label-text'>{label}</span>
				</label>
				<select
					id={name}
					className={`select select-bordered w-full ${className}`}
					{...rest}
				>
					{defaultOptionLabel ? (
						<option disabled value='*'>
							{defaultOptionLabel}
						</option>
					) : null}
					{options.map((option, index) => (
						<option key={index} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</div>
		);
	}
);

export default Select;
