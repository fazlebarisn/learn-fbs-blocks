
import { useBlockProps } from '@wordpress/block-editor';


export default function save( { attributes } ) {
    const { url, alt, id } = attributes;
    return(
        <div class="container">
            {
                url && (
                    <img src={url} alt={alt} className='testimonial-image' />
                )
            }
            <p><span>Chris Fox.</span> CEO at Mighty Schools.</p>
            <p>John Doe saved us from a web disaster.</p>
        </div>
    );
}
