
import { useBlockProps } from '@wordpress/block-editor';


export default function save( { attributes } ) {
    <div { ...useBlockProps() }>
        <div class="container">
            <img src="bandmember.jpg" alt="Avatar" style="width:90px"/>
            <p><span>Chris Fox.</span> CEO at Mighty Schools.</p>
            <p>John Doe saved us from a web disaster.</p>
        </div>
    </div>
}
