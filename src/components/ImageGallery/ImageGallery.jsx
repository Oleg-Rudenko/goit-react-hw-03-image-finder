import propTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onImageClick }) => (
    <ul className={css.ImageGallery}>
        {images.map((image, index) => (
            <ImageGalleryItem onclick={onImageClick} image={image} key={index} />
        ))}
        
    </ul>
);

ImageGallery.propTypes = {
    images: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
        })
    ),
 onImageClick: propTypes.func.isRequired,
};