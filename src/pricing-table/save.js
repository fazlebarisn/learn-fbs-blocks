
import { useBlockProps, RichText } from '@wordpress/block-editor';


export default function save( { attributes } ) {
    const { 
        title, starterTitle, starterPrice, premiumTitle, premiumPrice, businessTitle, businessPrice,
        starterBtnText, starterBtnUrl, premiumBtnText, premiumBtnUrl, businessBtnText, businessBtnUrl,
        starterBg, premiumBg, businessBg, starterColor, premiumColor, businesscolor, starterBtnColor,
        starterBtnBg, businessBtnColor, businessBtnBg, premiumTextColor, premiumBgColor
    } = attributes;

    return(
        <div {...useBlockProps.save()}>
            <div className='fbs-pricing-table'>
                <header>
                    <h1>{title}</h1>
                </header>
                <div className="fbs-cards">
                    <div className="fbs-card shadow" style={{background:starterBg,color:starterColor}}>
                        <h3 className="pack" style={{color:starterColor}}>{starterTitle}</h3>
                        <h2 id="starter" className="price bottom-bar" style={{color:starterColor}}>${starterPrice}</h2>
                        <RichText.Content tagName="ul" value={ attributes.starterContent } />
                        <a href={starterBtnUrl}>
                            <button className="btn active-btn" style={{background:starterBtnBg,color:starterBtnColor}}>
                                {starterBtnText}
                            </button>
                        </a>
                    </div>
                    <div className="fbs-card active" style={{background:premiumBg,color:premiumColor}}>
                        <h3 className="pack" style={{color:premiumColor}}>{premiumTitle}</h3>
                        <h2 id="premium" className="price bottom-bar" style={{color:premiumColor}}>${premiumPrice}</h2>
                        <RichText.Content tagName="ul" value={ attributes.premiumContent } />
                        <a href={premiumBtnUrl}>
                            <button className="btn active-btn" style={{background:premiumBgColor,color:premiumTextColor}}>
                                {premiumBtnText}
                            </button>
                        </a>
                    </div>
                    <div className="fbs-card shadow" style={{background:businessBg,color:businesscolor}}>
                        <h3 className="pack" style={{color:businesscolor}}>{businessTitle}</h3>
                        <h2 id="business" className="price bottom-bar" style={{color:businesscolor}}>${businessPrice}</h2>
                        <RichText.Content tagName="ul" value={ attributes.businessContent } />
                        <a href={businessBtnUrl}>
                            <button className="btn active-btn" style={{background:businessBtnBg,color:businessBtnColor}}>
                                {businessBtnText}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}