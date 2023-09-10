
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';


export default function save( { attributes } ) {
    const {gallery } = attributes;
    return(
        <div class="container-old">
            <InnerBlocks.content/>
        </div>
    );
}
