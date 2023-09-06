
import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls, RichText  } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl, SelectControl } from '@wordpress/components';

import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {
    const { title, description, button, tag } = attributes;
    return (
        <div { ...useBlockProps() }>
            <InspectorControls key="setting">
                <Panel>

                    <PanelBody title='Subscribe Title Settings' initialOpen={false}>
                        <TextControl className="blocks-base-control__input"
                            label={ __('change title text', 'fbs-block') }
                            value={title}
                            onChange={ (val) => setAttributes( {title: val} ) }
                        />
                        <SelectControl
                            label={__('Change tag', 'fbs-block')}
                            value={tag}
                            options={[
                                { label: __('H1', 'fbs-block'), value: 'h1' },
                                { label: __('H2', 'fbs-block'), value: 'h2' },
                                { label: __('H3', 'fbs-block'), value: 'h3' },
                                { label: __('H4', 'fbs-block'), value: 'h4' },
                                { label: __('H5', 'fbs-block'), value: 'h5' }
                            ]}
                            onChange={ (val) => setAttributes( {tag: val} ) }
                        />
                    </PanelBody>

                    <PanelBody title='Subscribe Description Settings' initialOpen={false}>
                        <TextControl className="blocks-base-control__input"
                            label={__('change description text', 'fbs-block')}
                            value={description}
                            onChange={ (val) => setAttributes( {description: val} ) }
                        />
                    </PanelBody>

                    <PanelBody title='Subscribe Button Settings' initialOpen={false}>
                        <TextControl className="blocks-base-control__input"
                            label={__('change button text','fbs-block') }
                            value={button}
                            onChange={ (val) => setAttributes( {button: val} ) }
                        />
                    </PanelBody>

                </Panel>
            </InspectorControls>
            <div className='subscribe'>
                <RichText
                    tagName={tag}
                    value={title}
                    allowedFormats={ [ 'core/bold', 'core/italic' ] }
                    className='subscribe__title'
                    onChange={ (val) => setAttributes( {title: val} ) }
                />
                <p className="subscribe__copy">{description}</p>
                <div className="form">
                    <input type="email" className="form__email" placeholder="Enter Your Email Id" />
                    <button className="form__button">{button}</button>
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
