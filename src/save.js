
import { useBlockProps } from '@wordpress/block-editor';


export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Fbs Block and you' }
		</p>
	);
}
