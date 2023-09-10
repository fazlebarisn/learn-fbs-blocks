
import { __ } from '@wordpress/i18n';

import { useBlockProps, MediaPlaceholder, BlockControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {
    const { url, alt, id } = attributes;
    return (
        <div { ...useBlockProps() }>
            <div class="container">
                <BlockControls>
                    {
                        url && (
                            <ToolbarGroup>
                                <ToolbarButton
                                    onClick={ () => setAttributes( { url:'', alt:'', id:''} ) }
                                    icon={'trash'}
                                />
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ (media) => setAttributes({
                                            id:media.id,
                                            url:media.url,
                                            alt:media.alt
                                        })}
                                        allowedTypes={['image']}
                                        value={id}
                                        render={ ({open}) => {
                                            <ToolbarButton
                                                onClick={open}
                                                icon={'edit'}
                                            />
                                        }}
                                    />
                                </MediaUploadCheck>
                            </ToolbarGroup>
                        )
                    }
                </BlockControls>
                {
                    url ? (
                        <img src={url} alt={alt} className='testimonial-image' />
                    ) : (
                        <MediaPlaceholder
                        onSelect={ (media) => setAttributes({
                            id: media.id,
                            url: media.url,
                            alt: media.ult || 'Image here'
                        })}
                        allowedTypes={ ['image'] }
                        multiple = {false}
                        labels={ { title: 'Add Image'} }
                    />
                    )
                }
                <p><span>Chris Fox.</span> CEO at Mighty Schools.</p>
                <p>John Doe saved us from a web disaster.</p>
            </div>
        </div>
    );
}

