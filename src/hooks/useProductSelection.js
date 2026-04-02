import { useCallback, useEffect, useMemo, useState } from 'react';

export function useProductSelection(product) {
  const [selectedImage, setSelectedImageState] = useState(0);
  const [selectedSize, setSelectedSizeState] = useState(product?.sizes?.[0] ?? 'S');
  const [selectedColor, setSelectedColorState] = useState(
    product?.colors?.[0] ?? { name: 'Pitch Black' },
  );
  const [quantity, setQuantityState] = useState(1);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (!product) {
      return;
    }

    setSelectedImageState(0);
    setSelectedSizeState(product.sizes[0]);
    setSelectedColorState(product.colors[0]);
    setQuantityState(1);
    setNotice('');
  }, [product]);

  const setSelectedImage = useCallback((nextImage) => {
    setNotice('');
    setSelectedImageState(nextImage);
  }, []);

  const setSelectedSize = useCallback((nextSize) => {
    setNotice('');
    setSelectedSizeState(nextSize);
  }, []);

  const setSelectedColor = useCallback((nextColor) => {
    setNotice('');
    setSelectedColorState(nextColor);
  }, []);

  const setQuantity = useCallback((nextQuantity) => {
    setNotice('');
    setQuantityState(Math.max(1, nextQuantity));
  }, []);

  const showNotice = useCallback((message) => {
    setNotice(message);
  }, []);

  const cartOptions = useMemo(() => {
    if (!product) {
      return null;
    }

    return {
      size: selectedSize,
      color: selectedColor.name,
      quantity,
      image: product.gallery[selectedImage] ?? product.image,
    };
  }, [product, quantity, selectedColor.name, selectedImage, selectedSize]);

  return {
    selectedImage,
    selectedSize,
    selectedColor,
    quantity,
    notice,
    cartOptions,
    setSelectedImage,
    setSelectedSize,
    setSelectedColor,
    setQuantity,
    showNotice,
  };
}
