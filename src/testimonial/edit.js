
import { __ } from '@wordpress/i18n';

import { useBlockProps, MediaPlaceholder, BlockControls, MediaUpload, MediaUploadCheck,InnerBlocks } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {
    const { gallery } = attributes;
    return (
        <div { ...useBlockProps() }>
            <div class="container-old">
                <BlockControls>

                </BlockControls>
               <InnerBlocks/>
            </div>
        </div>
    );
}

