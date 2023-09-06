
import { useBlockProps, RichText } from '@wordpress/block-editor';


export default function save( { attributes } ) {
    const { title, description, button, headingColor, descriptionColor, buttonColor, formBackground,buttonBackground} = attributes;
    return(
        <div {...useBlockProps.save()}>
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
