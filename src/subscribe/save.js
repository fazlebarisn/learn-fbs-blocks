
import { useBlockProps } from '@wordpress/block-editor';


export default function save( { attributes } ) {
    return(
        <div {...useBlockProps.save()}>
            <div className='subscribe'>
                <h2 className="subscribe__title">{attributes.title}</h2>
                <p className="subscribe__copy">{attributes.description}</p>
                <div className="form">
                    <input type="email" className="form__email" placeholder="Enter Your Email Id" />
                    <button className="form__button">{attributes.button}</button>
                </div>
            </div>
        </div>
    );
}
