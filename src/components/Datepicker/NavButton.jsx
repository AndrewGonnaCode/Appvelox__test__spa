import { jsx } from "@emotion/react";

export default function NavButton({ children, onClick, src }) {
	return (
		<img
			src={src}
			onClick={onClick}
			alt="arrow"
			style={{
				cursor: 'pointer',
			}}
		>
			{children}
		</img>
	);
}