
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchPage() {
  const [products, setProducts] = useState([]);     // product list state :contentReference[oaicite:2]{index=2}
  const [query, setQuery] = useState('');           // search input state :contentReference[oaicite:3]{index=3}
  const [loading, setLoading] = useState(false);    // loading indicator :contentReference[oaicite:4]{index=4}

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/products`, {
          params: { search: query }
        });                                       // Axios GET with params :contentReference[oaicite:5]{index=5}
        setProducts(res.data);
      } catch (err) {
        toast.error('Unable to load products. Please try again.');  // Toast on error :contentReference[oaicite:6]{index=6}
      }
      setLoading(false);
    };
    fetchProducts();
  }, [query]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      {loading
        ? <LoadingSpinner />
        : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )
      }
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}
