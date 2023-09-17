
import { useBlockProps, RichText } from '@wordpress/block-editor';


export default function save( { attributes } ) {
    const { 
        title, starterTitle, starterPrice, premiumTitle, premiumPrice, businessTitle, businessPrice,
        starterBtnText, starterBtnUrl, premiumBtnText, premiumBtnUrl, businessBtnText, businessBtnUrl,
        starterBg, premiumBg, businessBg
    } = attributes;

    return(
        <div {...useBlockProps.save()}>
            <div className='fbs-pricing-table'>
                <header>
                    <h1>{title}</h1>
                </header>
                <div className="fbs-cards">
                    <div className="fbs-card shadow" style={{background:starterBg}}>
                        <h3 className="pack">{starterTitle}</h3>
                        <h2 id="starter" className="price bottom-bar">${starterPrice}</h2>
                        <RichText.Content tagName="ul" value={ attributes.starterContent } />
                        <a href={starterBtnUrl}><button className="btn">{starterBtnText}</button></a>
                    </div>
                    <div className="fbs-card active" style={{background:premiumBg}}>
                        <h3 className="pack">{premiumTitle}</h3>
                        <h2 id="premium" className="price bottom-bar">${premiumPrice}</h2>
                        <RichText.Content tagName="ul" value={ attributes.premiumContent } />
                        <a href={premiumBtnUrl}><button className="btn active-btn">{premiumBtnText}</button></a>
                    </div>
                    <div className="fbs-card shadow" style={{background:businessBg}}>
                        <h3 className="pack">{businessTitle}</h3>
                        <h2 id="business" className="price bottom-bar">${businessPrice}</h2>
                        <RichText.Content tagName="ul" value={ attributes.businessContent } />
                        <a href={businessBtnUrl}><button className="btn">{businessBtnText}</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}