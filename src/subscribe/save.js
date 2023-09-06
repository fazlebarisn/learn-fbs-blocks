
import { useBlockProps, RichText } from '@wordpress/block-editor';


export default function save( { attributes } ) {
    const { title, description, button, HeadingColor } = attributes;
    return(
        <div {...useBlockProps.save()}>
            <div className='subscribe'>
                <h2 className="subscribe__title" style={{color:HeadingColor}}>{title}</h2>
                <p className="subscribe__copy">{description}</p>
                <div className="form">
                    <input type="email" className="form__email" placeholder="Enter Your Email Id" />
                    <button className="form__button">{button}</button>
                </div>
            </div>
        </div>
    );
}
