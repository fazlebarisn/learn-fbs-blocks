
import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl } from '@wordpress/components';

import './editor.scss';


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

