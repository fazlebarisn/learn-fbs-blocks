
import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls, RichText, PanelColorSettings  } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl,  __experimentalNumberControl as NumberControl } from '@wordpress/components';

import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {
    const { 
        title, starterTitle, starterPrice, premiumTitle, premiumPrice, businessTitle, businessPrice,
        starterBtnText, starterBtnUrl, premiumBtnText, premiumBtnUrl, businessBtnText, businessBtnUrl,
        starterBg, premiumBg, businessBg, starterColor, premiumColor, businesscolor
    } = attributes;

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
                    <PanelBody title='Header' initialOpen={false}>
                        <TextControl className="blocks-base-control__input"
                            label={ __('Change Pricing text', 'fbs-block') }
                            value={title}
                            onChange={ (title) => setAttributes( {title: title} ) }
                        />
                    </PanelBody>

                    <PanelBody title='Starter' initialOpen={false}>
                        <TextControl className="blocks-base-control__input"
                            label={ __('Title text', 'fbs-block') }
                            value={starterTitle}
                            onChange={ (title) => setAttributes( {starterTitle: title} ) }
                        />
                        <NumberControl className="blocks-base-control__input"
                            label={ __('Price', 'fbs-block') }
                            isShiftStepEnabled={ true }
                            shiftStep={ 10 }
                            value={starterPrice}
                            onChange={ (price) => setAttributes( {starterPrice: price} ) }
                        />
                        <TextControl className="blocks-base-control__input"
                            label={ __('Button text', 'fbs-block') }
                            value={starterBtnText}
                            onChange={ (btnText) => setAttributes( {starterBtnText: btnText} ) }
                        />
                        <TextControl className="blocks-base-control__input"
                            label={ __('Button Url', 'fbs-block') }
                            value={starterBtnUrl}
                            onChange={ (btnUrl) => setAttributes( {starterBtnUrl: btnUrl} ) }
                        />
                    </PanelBody>

                    <PanelBody title='Premium' initialOpen={false}>
                        <TextControl className="blocks-base-control__input"
                            label={ __('Title text', 'fbs-block') }
                            value={premiumTitle}
                            onChange={ (title) => setAttributes( {premiumTitle: title} ) }
                        />
                        <NumberControl className="blocks-base-control__input"
                            label={ __('Price', 'fbs-block') }
                            isShiftStepEnabled={ true }
                            shiftStep={ 10 }
                            value={premiumPrice}
                            onChange={ (price) => setAttributes( {premiumPrice: price} ) }
                        />
                        <TextControl className="blocks-base-control__input"
                            label={ __('Button text', 'fbs-block') }
                            value={premiumBtnText}
                            onChange={ (btnText) => setAttributes( {premiumBtnText: btnText} ) }
                        />
                        <TextControl className="blocks-base-control__input"
                            label={ __('Button Url', 'fbs-block') }
                            value={premiumBtnUrl}
                            onChange={ (btnUrl) => setAttributes( {premiumBtnUrl: btnUrl} ) }
                        />
                    </PanelBody>

                    <PanelBody title='Business' initialOpen={false}>
                        <TextControl className="blocks-base-control__input"
                            label={ __('Title text', 'fbs-block') }
                            value={businessTitle}
                            onChange={ (title) => setAttributes( {businessTitle: title} ) }
                        />
                        <NumberControl className="blocks-base-control__input"
                            label={ __('Price', 'fbs-block') }
                            isShiftStepEnabled={ true }
                            shiftStep={ 10 }
                            value={businessPrice}
                            onChange={ (price) => setAttributes( {businessPrice: price} ) }
                        />
                        <TextControl className="blocks-base-control__input"
                            label={ __('Button text', 'fbs-block') }
                            value={businessBtnText}
                            onChange={ (btnText) => setAttributes( {businessBtnText: btnText} ) }
                        />
                        <TextControl className="blocks-base-control__input"
                            label={ __('Button Url', 'fbs-block') }
                            value={businessBtnUrl}
                            onChange={ (btnUrl) => setAttributes( {businessBtnUrl: btnUrl} ) }
                        />
                    </PanelBody>
                </Panel>
                <PanelColorSettings
                    title = { __('Colors', 'fbs-block') }
                    initialOpen={false}
                    colors={colors}
                    colorSettings={[
                        {
                            value:starterBg,
                            onChange: (color) => setAttributes( {starterBg: color} ),
                            label: __('Starter Card BG', 'fbs-block')
                        },
                        {
                            value:starterColor,
                            onChange: (color) => setAttributes( {starterColor: color} ),
                            label: __('Starter Card Color', 'fbs-block')
                        },
                        {
                            value:premiumBg,
                            onChange: (color) => setAttributes( {premiumBg: color} ),
                            label: __('Premium Card BG', 'fbs-block')
                        },
                        {
                            value:premiumColor,
                            onChange: (color) => setAttributes( {premiumColor: color} ),
                            label: __('Premium Card Color', 'fbs-block')
                        },
                        {
                            value:businessBg,
                            onChange: (color) => setAttributes( {businessBg: color} ),
                            label: __('Business Card Bg', 'fbs-block')
                        },
                        {
                            value:businesscolor,
                            onChange: (color) => setAttributes( {businesscolor: color} ),
                            label: __('Business Card Color', 'fbs-block')
                        },
                    ]}
                />
            </InspectorControls>
            <div className='fbs-pricing-table'>
                <header>
                    <h1>{title}</h1>
                </header>
                <div className="fbs-cards">
                    <div className="fbs-card shadow" style={{background:starterBg,color:starterColor}}>
                        <h3 className="pack" style={{color:starterColor}}>{starterTitle}</h3>
                        <h2 id="starter" className="price bottom-bar" style={{color:starterColor}}>${starterPrice}</h2>
                        <RichText
                            tagName='ul'
                            multiline='li'
                            value={ attributes.starterContent }
                            // onChange={ ( starterContent ) => setAttributes( { starterContent } ) }
                            onChange={ (content) => setAttributes( {starterContent: content} ) }
                            placeholder={ __('Add list', 'fbs-block') }
                        />
                        <a href={starterBtnUrl}><button className="btn active-btn">{starterBtnText}</button></a>
                    </div>
                    <div className="fbs-card active" style={{background:premiumBg,color:premiumColor}}>
                        <h3 className="pack" style={{color:premiumColor}}>{premiumTitle}</h3>
                        <h2 id="premium" className="price bottom-bar" style={{color:premiumColor}}>${premiumPrice}</h2>
                        <RichText
                            tagName='ul'
                            multiline='li'
                            value={ attributes.premiumContent }
                            onChange={ ( premiumContent ) => setAttributes( { premiumContent } ) }
                            placeholder={ __('Add list', 'fbs-block') }
                        />
                        <a href={premiumBtnUrl}><button className="btn active-btn">{premiumBtnText}</button></a>
                    </div>
                    <div className="fbs-card shadow" style={{background:businessBg,color:businesscolor}}>
                        <h3 className="pack" style={{color:businesscolor}}>{businessTitle}</h3>
                        <h2 id="business" className="price bottom-bar" style={{color:businesscolor}}>${businessPrice}</h2>
                        <RichText
                            tagName='ul'
                            multiline='li'
                            value={ attributes.businessContent }
                            onChange={ ( businessContent ) => setAttributes( { businessContent } ) }
                            placeholder={ __('Add list', 'fbs-block') }
                        />
                        <a href={businessBtnUrl}><button className="btn active-btn">{businessBtnText}</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
