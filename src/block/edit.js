
import { __ } from '@wordpress/i18n';

import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder, TextControl } from '@wordpress/components';

import './editor.scss';

/** 
export default function Edit( { attributes, className, setAttributes } ) {
    return (
        <div { ...useBlockProps() }>
			<Placeholder
				label = { __( 'Type Message', 'fbs-block' ) }
				instructions={ __( 'Add your message', 'fbs-block' ) }
			>
				<TextControl
					value={attributes.message}
					onChange={ (val) => setAttributes( { message: val } ) }
				/>
			</Placeholder>

        </div>
    );
}
*/

export default function Edit( { attributes, isSelected, setAttributes } ) {
    return (
        <div { ...useBlockProps() }>
            { attributes.message && ! isSelected ? (
                <div>{ attributes.message }</div>
            ) : (
                <Placeholder
                    label="Fbs Block"
                    instructions="Add your message"
                >
                    <TextControl
                        value={ attributes.message }
                        onChange={ ( val ) =>
                            setAttributes( { message: val } )
                        }
                    />
                </Placeholder>
            ) }
        </div>
    );
}

/** 

export default function Edit( { attributes, setAttributes } ) {
    const blockProps = useBlockProps();
    return (
        <TextControl
            { ...blockProps }
            value={ attributes.message }
            onChange={ ( val ) => setAttributes( { message: val } ) }
        />
    );
}
*/