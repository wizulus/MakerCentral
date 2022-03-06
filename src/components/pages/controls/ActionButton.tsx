import React from 'react';
import Link from 'next/link';

/**
 * A button to lead the user to a new page.
 * @param props.text The text to display.
 * @param props.to The path to lead to.
 * @param props.onClick (Optional) A function to execute when clicked.
 */
function ActionButton(props: {to: string, text: string, onClick?: () => void}) {
	return (
		<Link href={props.to}>
			<button
				className="action-button"
				type="button"
				onClick={props.onClick!}
			>{props.text}
			</button>
		</Link>
	);
}

ActionButton.defaultProps = {
	onClick: () => {},
};

export default ActionButton;
