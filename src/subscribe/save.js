
import { useBlockProps } from '@wordpress/block-editor';


export default function save( { attributes } ) {
    return(
        <div {...useBlockProps.save()}>
            <h2 className='subscribe-heading'>{attributes.heading}</h2>
            <p>Visit our subscribe page</p>
        </div>
    );
}
