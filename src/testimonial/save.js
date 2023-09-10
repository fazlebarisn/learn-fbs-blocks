
import { useBlockProps } from '@wordpress/block-editor';


export default function save( { attributes } ) {
    const {gallery } = attributes;
    return(
        <div class="container">
            <div className='gallery-container'>
                {
                    gallery.map( (image, index) => {
                        return(
                            <div className='single-gallery-image' key={index}>
                                <img src={image.url} alt={image.alt} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
