
import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls, RichText  } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl, SelectControl } from '@wordpress/components';

import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {
    const blockProps = useBlockProps();
    return (
        <RichText
            { ...blockProps }
            tagName="h2" // The tag here is the element output and editable in the admin
            value={ attributes.content } // Any existing content, either from the database or an attribute default
            allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
            onChange={ ( content ) => setAttributes( { content } ) } // Store updated content as a block attribute
            placeholder={ __( 'Heading...' ) } // Display this text before any content has been added by the user
        />
    );
}


/** 

export default function Edit( { attributes, setAttributes } ) {
    return (
        <div { ...useBlockProps() }>
            <InspectorControls key="setting">
                <Panel>
                    <PanelBody title='Subscribe Attribute' initialOpen={true}>
                        <TextControl className="blocks-base-control__input"
                        label={"Heading"}
                        value={attributes.heading}
                        onChange={ (val) => setAttributes({heading: val}) }
                        />
                    </PanelBody>
                </Panel>
            </InspectorControls>
            <h2 className="{subscribe-heading}">{attributes.heading}</h2>
            <p>Visit our subscribe page</p>
        </div>
    );
}

*/
