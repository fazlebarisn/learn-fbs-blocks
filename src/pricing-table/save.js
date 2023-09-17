
import { useBlockProps, RichText } from '@wordpress/block-editor';


export default function save( { attributes } ) {
    const { title, starterTitle, starterPrice, premiumTitle, premiumPrice, businessTitle, businessPrice} = attributes;
    return(
        <div {...useBlockProps.save()}>
            <div className='fbs-pricing-table'>
                <header>
                    <h1>{title}</h1>
                </header>
                <div className="cards">
                    <div className="card shadow">
                        <h3 className="pack">{starterTitle}</h3>
                        <h2 id="starter" className="price bottom-bar">${starterPrice}</h2>
                        <RichText.Content tagName="ul" value={ attributes.starterContent } />
                        <button className="btn">Learn More</button>
                    </div>
                    <div className="card active">
                        <h3 className="pack">{premiumTitle}</h3>
                        <h2 id="premium" className="price bottom-bar">${premiumPrice}</h2>
                        <RichText.Content tagName="ul" value={ attributes.premiumContent } />
                        <button className="btn">Learn More</button>
                    </div>
                    <div className="card shadow">
                        <h3 className="pack">{businessTitle}</h3>
                        <h2 id="business" className="price bottom-bar">${businessPrice}</h2>
                        <RichText.Content tagName="ul" value={ attributes.businessContent } />
                        <button className="btn">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}