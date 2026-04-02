export default function ProductGallery({ product, selectedImage, onSelectImage }) {
  return (
    <div className="grid gap-4">
      <div className="frame-panel overflow-hidden bg-raw-panel">
        <img
          alt={product.name}
          className="h-full max-h-[700px] w-full object-cover"
          src={product.gallery[selectedImage] ?? product.image}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {product.gallery.map((image, index) => (
          <button
            key={`${product.id}-${image}`}
            className={`overflow-hidden border-4 transition duration-150 transition-snappy ${
              selectedImage === index
                ? 'border-raw-warning bg-raw-warning'
                : 'border-raw-border bg-white hover:bg-raw-panel'
            }`}
            onClick={() => onSelectImage(index)}
            type="button"
          >
            <img alt={`${product.name} view ${index + 1}`} className="aspect-square h-full w-full object-cover" src={image} />
          </button>
        ))}
      </div>
    </div>
  );
}
