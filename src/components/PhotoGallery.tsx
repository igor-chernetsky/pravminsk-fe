import React, { useState } from 'react';
import styles from './PhotoGallery.module.scss';

// Old photo interface (for backward compatibility)
interface OldPhoto {
  id: number;
  fullPath: string;
  name: string;
}

// New Strapi image interface
interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      url: string;
    };
    small: {
      url: string;
    };
    medium: {
      url: string;
    };
    large: {
      url: string;
    };
  };
  url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

type Photo = OldPhoto | StrapiImage;

interface PhotoGalleryProps {
  photos: Photo[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  const cmsUrl = import.meta.env.VITE_CMS_URL;

  // Helper function to check if photo is a Strapi image
  const isStrapiImage = (photo: Photo): photo is StrapiImage => {
    return 'formats' in photo && 'url' in photo;
  };

  // Helper function to get thumbnail URL
  const getThumbnailUrl = (photo: Photo): string => {
    if (isStrapiImage(photo)) {
      return `${cmsUrl}${photo.formats.thumbnail.url}`;
    } else {
      return `${imageBaseUrl}toimg/150/150/${photo.fullPath}`;
    }
  };

  // Helper function to get full image URL
  const getFullImageUrl = (photo: Photo): string => {
    if (isStrapiImage(photo)) {
      return `${cmsUrl}${photo.formats.large.url}`;
    } else {
      return `${imageBaseUrl}${photo.fullPath}`;
    }
  };

  // Helper function to get image name
  const getImageName = (photo: Photo): string => {
    if (isStrapiImage(photo)) {
      return photo.name || 'Фото';
    } else {
      return photo.name || 'Фото';
    }
  };

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const handleClosePopup = () => {
    setSelectedPhoto(null);
  };

  const handlePreviousPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex(photo => photo.id === selectedPhoto.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    setSelectedPhoto(photos[previousIndex]);
  };

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex(photo => photo.id === selectedPhoto.id);
    const nextIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    setSelectedPhoto(photos[nextIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClosePopup();
    } else if (e.key === 'ArrowLeft') {
      handlePreviousPhoto();
    } else if (e.key === 'ArrowRight') {
      handleNextPhoto();
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.target as HTMLImageElement;
    const originalPath = img.dataset.originalPath;
    
    if (originalPath) {
      // If thumbnail failed, try original image
      if (originalPath.startsWith('/uploads/')) {
        // Strapi image - use CMS URL
        img.src = `${cmsUrl}${originalPath}`;
      } else {
        // Old photo - use image base URL
        img.src = `${imageBaseUrl}${originalPath}`;
      }
    }
  };

  // Add keyboard event listener when popup is open
  React.useEffect(() => {
    if (selectedPhoto) {
      const handleGlobalKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClosePopup();
        } else if (e.key === 'ArrowLeft') {
          handlePreviousPhoto();
        } else if (e.key === 'ArrowRight') {
          handleNextPhoto();
        }
      };

      document.addEventListener('keydown', handleGlobalKeyDown);
      return () => {
        document.removeEventListener('keydown', handleGlobalKeyDown);
      };
    }
  }, [selectedPhoto, photos]);

  if (!photos || photos.length === 0) return null;

  return (
    <>
      <div className={styles.gallery}>
        <h3 className={styles.galleryTitle}>Фотогалерея</h3>
        <div className={styles.photoGrid}>
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={styles.photoItem}
              onClick={() => handlePhotoClick(photo)}
            >
              <img
                src={getThumbnailUrl(photo)}
                data-original-path={isStrapiImage(photo) ? photo.url : photo.fullPath}
                alt={getImageName(photo)}
                className={styles.photoImage}
                onError={handleImageError}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div className={styles.popup} onClick={handleClosePopup}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.navButton} onClick={handlePreviousPhoto}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.closeButton} onClick={handleClosePopup}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.navButton} onClick={handleNextPhoto}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <img
              src={getFullImageUrl(selectedPhoto)}
              alt={getImageName(selectedPhoto)}
              className={styles.popupImage}
              tabIndex={0}
            />
            <div className={styles.photoCounter}>
              {photos.findIndex(photo => photo.id === selectedPhoto.id) + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery; 