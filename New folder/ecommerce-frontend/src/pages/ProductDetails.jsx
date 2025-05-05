
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import { toast } from 'react-toastify';

export default function ProductDetails() {
  const { id } = useParams();                    // get :id from URL :contentReference[oaicite:10]{index=10}
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/products/${id}`);
        setProduct(res.data);
      } catch {
        toast.error(`Could not load product #${id}`);   // friendly error toast :contentReference[oaicite:11]{index=11}
      }
      setLoading(false);
    };
    fetchDetail();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!product) return <div className="p-4">Product not found.</div>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover mb-4 rounded" />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
      <p className="mb-4">{product.description}</p>
      <span className="inline-block px-3 py-1 text-sm bg-gray-200 rounded">{product.brand}</span>
      <Link to="/" className="block mt-6 text-blue-500 hover:underline">&larr; Back to Search</Link>
    </div>
  );
}
