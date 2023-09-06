
import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls, PanelColorSettings  } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl, ColorPalette } from '@wordpress/components';

import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {
    const { title, description, button, headingColor, descriptionColor, buttonColor,formBackground,buttonBackground } = attributes;

    const colors = [
        { name: 'red', color: '#f00' },
        { name: 'white', color: '#fff' },
        { name: 'blue', color: '#00f' },
        { name: 'dark', color: '#333333' },
    ];

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
                        <p>Chnage text Color</p>
                        <ColorPalette
                            colors={colors}
                            value={headingColor}
                            onChange={ (color) => setAttributes( { headingColor: color } ) }
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

                <PanelColorSettings
                    title = { __('Color Settings', 'fbs-block') }
                    initialOpen={false}
                    colors={colors}
                    colorSettings={[
                        {
                            value:headingColor,
                            onChange: (color) => setAttributes( {headingColor: color} ),
                            label: __('Heading Color', 'fbs-block')
                        },
                        {
                            value:descriptionColor,
                            onChange: (color) => setAttributes( {descriptionColor: color} ),
                            label: __('Description Color', 'fbs-block')
                        },
                        {
                            value:buttonColor,
                            onChange: (color) => setAttributes( {buttonColor: color} ),
                            label: __('Button Color', 'fbs-block')
                        },
                        {
                            value:formBackground,
                            onChange: (color) => setAttributes( {formBackground: color} ),
                            label: __('Form Background Color', 'fbs-block')
                        },
                        {
                            value:buttonBackground,
                            onChange: (color) => setAttributes( {buttonBackground: color} ),
                            label: __('Button Background Color', 'fbs-block')
                        },
                    ]}
                />
            </InspectorControls>
            <div className='subscribe' style={{background:formBackground}} >
                <h2 className="subscribe__title" style={{color:headingColor}} >{title}</h2>
                <p className="subscribe__copy" style={{color:descriptionColor}}>{description}</p>
                <div className="form">
                    <input type="email" className="form__email" placeholder="Enter Your Email Id" />
                    <button className="form__button" style={{color:buttonColor,background:buttonBackground}} >{button}</button>
                </div>
            </div>
        </div>
    );
}

