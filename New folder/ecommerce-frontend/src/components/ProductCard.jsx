
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ProductCard = React.memo(function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="product-card cursor-pointer border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow p-4"
      onClick={handleClick}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
      />
      <div className="text-lg font-semibold">{product.name}</div>
      <div className="text-sm text-gray-500">{product.brand}</div>
      <div className="mt-2 text-xl">${product.price.toFixed(2)}</div>
      <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded">
        {product.category}
      </span>
    </div>
  );
});

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
