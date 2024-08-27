import { useState } from 'react';
import { ImageGallery_backend } from 'declarations/ImageGallery_backend';



const App = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const uploadedImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...uploadedImages]);
  };

  return (
    <div>
      <h2>Upload and Display Images</h2>
      <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
      <div style={styles.gallery}>
        {images.map((image, index) => (
          <div key={index} style={styles.imageContainer}>
            <img src={image} alt={`Uploaded ${index}`} style={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  imageContainer: {
    width: '150px',
    height: '150px',
    margin: '10px',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default App;