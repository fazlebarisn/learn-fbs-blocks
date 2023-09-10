
import { useBlockProps } from '@wordpress/block-editor';


export default function save( { attributes } ) {
    const {gallery } = attributes;
    return(
        <div class="container">
            <div className='gallery-container'>

            </div>
        </div>
    );
}
