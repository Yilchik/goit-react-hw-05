import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { getMoviesApi } from "./movies-api";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(false);

  useEffect(() => {
    const searchImages = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await getMoviesApi(query, page);
        console.log(data);
        setImages((prev) => [...prev, ...data]);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    query && searchImages();
  }, [page, query]);

  const handleSubmit = async (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {error && (
        <ErrorMessage message="Whoops, something went wrong! Please try reloading this page!" />
      )}

      <ImageGallery images={images} onImageClick={handleImageClick} />

      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={Boolean(selectedImage)}
          onRequestClose={handleCloseModal}
          image={selectedImage}
        />
      )}
    </div>
  );
}

export default App;
