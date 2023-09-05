
import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl } from '@wordpress/components';

import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {
    return (
        <div { ...useBlockProps() }>
            <InspectorControls key="setting">
                <Panel>
                    <PanelBody title='Subscribe Settings' initialOpen={true}>

                        <TextControl className="blocks-base-control__input"
                            label={'Title'}
                            value={attributes.title}
                            onChange={ (val) => setAttributes( {title: val} ) }
                        />

                        <TextControl className="blocks-base-control__input"
                            label={'description'}
                            value={attributes.description}
                            onChange={ (val) => setAttributes( {description: val} ) }
                        />

                        <TextControl className="blocks-base-control__input"
                            label={'button'}
                            value={attributes.button}
                            onChange={ (val) => setAttributes( {button: val} ) }
                        />

                    </PanelBody>
                </Panel>
            </InspectorControls>
            <div className='subscribe'>
                <h2 className="subscribe__title">{attributes.title}</h2>
                <p className="subscribe__copy">{attributes.description}</p>
                <div className="form">
                    <input type="email" className="form__email" placeholder="Enter Your Email Id" />
                    <button className="form__button">{attributes.button}</button>
                </div>
            </div>
        </div>
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
