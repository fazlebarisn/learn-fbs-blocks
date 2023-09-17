
import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl } from '@wordpress/components';

import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {
    const { title} = attributes;
    return (
        <div { ...useBlockProps() }>
            <InspectorControls key="setting">
                <Panel>
                    <PanelBody title='Header' initialOpen={false}>
                        <TextControl className="blocks-base-control__input"
                            label={ __('Change Pricing text', 'fbs-block') }
                            value={title}
                            onChange={ (val) => setAttributes( {title: val} ) }
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
                    <ul>
                        <h3 className="pack">Basic</h3>
                        <h2 id="basic" className="price bottom-bar">$199.99</h2>
                        <li className="bottom-bar">500 GB Storage</li>
                        <li className="bottom-bar">2 Users Allowed</li>
                        <li className="bottom-bar">Send up to 3 GB</li>
                        <li><button className="btn">Learn More</button></li>
                    </ul>
                    </div>
                    <div className="card active">
                    <ul>
                        <h3 className="pack">Professional</h3>
                        <h2 id="professional" className="price bottom-bar">$249.99</h2>
                        <li className="bottom-bar">1 TB Storage</li>
                        <li className="bottom-bar">5 Users Allowed</li>
                        <li className="bottom-bar">Send up to 10 GB</li>
                        <li><button className="btn active-btn">Learn More</button></li>
                    </ul>
                    </div>
                    <div className="card shadow">
                    <ul>
                        <h3 className="pack">Master</h3>
                        <h2 id="master" className="price bottom-bar">$399.99</h2>
                        <li className="bottom-bar">2 TB Storage</li>
                        <li className="bottom-bar">10 Users Allowed</li>
                        <li className="bottom-bar">Send up to 20 GB</li>
                        <li><button className="btn">Learn More</button></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
