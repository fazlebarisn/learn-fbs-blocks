
import { __ } from '@wordpress/i18n';

import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder, TextControl } from '@wordpress/components';

import './editor.scss';


export default function Edit( { attributes, isSelected, setAttributes } ) {
    return (
        <div { ...useBlockProps() }>
            <div class="container">
                <img src="bandmember.jpg" alt="Avatar" style="width:90px"/>
                <p><span>Chris Fox.</span> CEO at Mighty Schools.</p>
                <p>John Doe saved us from a web disaster.</p>
            </div>
        </div>
    );
}

