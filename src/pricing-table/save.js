
import { useBlockProps } from '@wordpress/block-editor';


export default function save( { attributes } ) {
    const { title, annually , monthly} = attributes;
    return(
        <div {...useBlockProps.save()}>
            <div className='fbs-pricing-table'>
                <header>
                    <h1>{title}</h1>
                    <div className="toggle">
                    <label>{annually}</label>
                    <div className="toggle-btn">
                        <input type="checkbox" className="checkbox" id="checkbox" />
                        <label className="sub" id="sub" for="checkbox">
                        <div className="circle"></div>
                        </label>
                    </div>
                    <label>{monthly}</label>
                    </div>
                </header>
                <div className="cards">
                    <div className="card shadow">
                    <ul>
                        <li className="pack">Basic</li>
                        <li id="basic" className="price bottom-bar">$199.99</li>
                        <li className="bottom-bar">500 GB Storage</li>
                        <li className="bottom-bar">2 Users Allowed</li>
                        <li className="bottom-bar">Send up to 3 GB</li>
                        <li><button className="btn">Learn More</button></li>
                    </ul>
                    </div>
                    <div className="card active">
                    <ul>
                        <li className="pack">Professional</li>
                        <li id="professional" className="price bottom-bar">$249.99</li>
                        <li className="bottom-bar">1 TB Storage</li>
                        <li className="bottom-bar">5 Users Allowed</li>
                        <li className="bottom-bar">Send up to 10 GB</li>
                        <li><button className="btn active-btn">Learn More</button></li>
                    </ul>
                    </div>
                    <div className="card shadow">
                    <ul>
                        <li className="pack">Master</li>
                        <li id="master" className="price bottom-bar">$399.99</li>
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