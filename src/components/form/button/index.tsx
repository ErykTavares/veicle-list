import React, { HTMLAttributes, HtmlHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, type = 'button', ...rest }: ButtonProps) => {
	return (
		<button
			type={type}
			className={`btn flex items-center justify-center hover:!text-white  ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
