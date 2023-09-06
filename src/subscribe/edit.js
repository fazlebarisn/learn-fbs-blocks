
import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls, PanelColorSettings  } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl, ColorPalette, GradientPicker, __experimentalBoxControl as BoxControl } from '@wordpress/components';

import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {
    const { title, description, button, headingColor, descriptionColor, buttonColor,formBackground,buttonBackground, formPadding } = attributes;

    const colors = [
        { name: 'red', color: '#f00' },
        { name: 'white', color: '#fff' },
        { name: 'blue', color: '#00f' },
        { name: 'dark', color: '#333333' },
    ];

    const gradientColors = [
        {
            name: 'Vivid cyan blue to vivid purple',
            gradient:
                'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
            slug: 'vivid-cyan-blue-to-vivid-purple',
        },
        {
            name: 'Light green cyan to vivid green cyan',
            gradient:
                'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
            slug: 'light-green-cyan-to-vivid-green-cyan',
        },
        {
            name: 'Luminous vivid amber to luminous vivid orange',
            gradient:
                'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
            slug: 'luminous-vivid-amber-to-luminous-vivid-orange',
        },
        {
            name: 'Luminous vivid orange to vivid red',
            gradient:
                'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
            slug: 'luminous-vivid-orange-to-vivid-red',
        },
        {
            name: 'Very light gray to cyan bluish gray',
            gradient:
                'linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)',
            slug: 'very-light-gray-to-cyan-bluish-gray',
        },
        {
            name: 'Cool to warm spectrum',
            gradient:
                'linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)',
            slug: 'cool-to-warm-spectrum',
        },
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

                    <PanelBody title='From Gradient BG' initialOpen={false}>
                        <GradientPicker
                            onChange={ (color) => setAttributes( {formBackground: color} ) }
                            gradients={gradientColors}
                        />
                    </PanelBody>

                    <PanelBody title='Typography' initialOpen={false}>
                        <BoxControl
                            label={__('Set Form Padding','fbs-block') }
                            values={formPadding}
                            onChange={ (padding) => setAttributes( {formPadding: padding} ) }
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

