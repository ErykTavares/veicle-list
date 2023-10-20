import React, { useCallback, useEffect, useRef } from 'react';

interface ModalProps {
	children: React.ReactNode;
	title?: string;
	show: boolean;
	handleClose: () => void;
}

const Modal = ({ children, title, show, handleClose }: ModalProps): JSX.Element | null => {
	const modalRef = useRef<HTMLDivElement>(null);

	const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
		const target = e.target as HTMLElement;
		if (target?.classList?.contains('modal')) {
			handleClose();
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.code === 'Escape') handleClose();
	};

	const autoFocus = useCallback(() => {
		if (show && modalRef.current) {
			modalRef.current.focus();
		}
	}, [show]);

	useEffect(() => {
		autoFocus();
	}, [autoFocus]);

	if (!show) return null;

	return (
		<div
			ref={modalRef}
			tabIndex={-1}
			className='modal !opacity-100 !pointer-events-auto modal-middle sm:modal-middle "modal-toggle'
			onClick={handleOnClick}
			onKeyDown={handleKeyPress}
		>
			<div id='modal-fc-box' className='modal-box'>
				<div>
					<button
						type='button'
						className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
						onClick={handleClose}
					>
						✕
					</button>
				</div>
				{title ? <h3 className='font-bold text-lg'>{title}</h3> : null}
				<div className='w-full'>{children}</div>
			</div>
		</div>
	);
};
export default Modal;
