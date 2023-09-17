
import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls, RichText  } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl,  __experimentalNumberControl as NumberControl } from '@wordpress/components';

import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {
    const { title, starterTitle, starterPrice, premiumTitle, premiumPrice, businessTitle, businessPrice} = attributes;
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
                    </PanelBody>
                </Panel>
            </InspectorControls>
            <div className='fbs-pricing-table'>
                <header>
                    <h1>{title}</h1>
                </header>
                <div className="cards">
                    <div className="card shadow">
                        <h3 className="pack">{starterTitle}</h3>
                        <h2 id="starter" className="price bottom-bar">${starterPrice}</h2>
                        <RichText
                            tagName='ul'
                            multiline='li'
                            value={ attributes.starterContent }
                            // onChange={ ( starterContent ) => setAttributes( { starterContent } ) }
                            onChange={ (content) => setAttributes( {starterContent: content} ) }
                            placeholder={ __('Add list', 'fbs-block') }
                        />
                        <button className="btn">Learn More</button>
                    </div>
                    <div className="card active">
                        <h3 className="pack">{premiumTitle}</h3>
                        <h2 id="premium" className="price bottom-bar">${premiumPrice}</h2>
                        <RichText
                            tagName='ul'
                            multiline='li'
                            value={ attributes.premiumContent }
                            onChange={ ( premiumContent ) => setAttributes( { premiumContent } ) }
                            placeholder={ __('Add list', 'fbs-block') }
                        />
                        <button className="btn active-btn">Learn More</button>
                    </div>
                    <div className="card shadow">
                        <h3 className="pack">{businessTitle}</h3>
                        <h2 id="business" className="price bottom-bar">${businessPrice}</h2>
                        <RichText
                            tagName='ul'
                            multiline='li'
                            value={ attributes.businessContent }
                            onChange={ ( businessContent ) => setAttributes( { businessContent } ) }
                            placeholder={ __('Add list', 'fbs-block') }
                        />
                        <button className="btn">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
