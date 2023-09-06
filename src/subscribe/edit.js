
import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls, RichText  } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl, ColorPalette } from '@wordpress/components';

import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {
    const { title, description, button, HeadingColor } = attributes;

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
                            value={HeadingColor}
                            onChange={ (color) => setAttributes( { HeadingColor: color } ) }
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
                <h2 className="subscribe__title" style={{color:HeadingColor}} >{title}</h2>
                <p className="subscribe__copy">{description}</p>
                <div className="form">
                    <input type="email" className="form__email" placeholder="Enter Your Email Id" />
                    <button className="form__button">{button}</button>
                </div>
            </div>
        </div>
    );
}

