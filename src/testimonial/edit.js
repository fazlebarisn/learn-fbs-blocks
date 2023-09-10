
import { __ } from '@wordpress/i18n';

import { useBlockProps, MediaPlaceholder, BlockControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {
    const { gallery } = attributes;
    return (
        <div { ...useBlockProps() }>
            <div class="container-old">
                <BlockControls>
                    {
                        gallery && (
                            <ToolbarGroup>
                                <ToolbarButton
                                    onClick={ () => setAttributes( { gallery:''} ) }
                                    icon={'trash'}
                                />
                                <MediaUploadCheck>
                                    <MediaUpload
                                        multiple={true}
                                        gallery={true}
                                        onSelect={ (media) => setAttributes( { gallery:media } ) }
                                        allowedTypes={['image']}
                                        value={ gallery.map( (image) => image.id ) }
                                        render={ ({open}) => (
                                            <ToolbarButton
                                                onClick={open}
                                                icon={'edit'}
                                            />
                                        )}
                                    />
                                </MediaUploadCheck>
                            </ToolbarGroup>
                        )
                    }
                </BlockControls>
                {
                    gallery ? (
                        <div className='gallery-container'>
                            {
                                gallery.map( (image, index) => {
                                    return(
                                        <div className='single-gallery-image' key={index}>
                                            <img src={image.url} alt={image.alt} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (
                        <MediaPlaceholder
                        onSelect={ (media) => setAttributes( { gallery:media } ) }
                        allowedTypes={ ['image'] }
                        multiple = {true}
                        labels={ { title: 'Add Images'} }
                    />
                    )
                }
            </div>
        </div>
    );
}

