
import { useBlockProps, RichText } from '@wordpress/block-editor';


export default function save( { attributes } ) {
    const blockProps = useBlockProps.save();

    return <RichText.Content { ...blockProps } tagName="h2" value={ attributes.content } />; // Saves <h2>Content added in the editor...</h2> to the database for frontend display
    
}
