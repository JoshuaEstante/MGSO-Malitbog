import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Item = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`https://mgso-malitbog-server.vercel.app/api/parRoute/${id}`);
        setItem(response.data);
      } catch (error) {
        setError(error.response ? error.response.data.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/api/parRoute/${id}`, item);
      alert('Item updated successfully');
    } catch (error) {
      alert('Error updating item: ' + (error.response ? error.response.data.message : 'An error occurred'));
    }
  };

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8">Error: {error}</div>;
  }

  return (
    <div className="p-8 bg-timberwolf">
    <div className="mx-auto w-4/5 p-6 border border-gray-300 shadow-lg rounded-lg bg-white">
      <h1 className="text-xl font-bold mb-4 text-center">Item Details</h1>
      {item && (
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block mb-2">ID:</label>
              <input type="text" name="ID" value={item.ID} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Description:</label>
              <input type="text" name="Description" value={item.Description} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">QTY:</label>
              <input type="number" name="QTY" value={item.QTY} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">UNIT:</label>
              <input type="text" name="UNIT" value={item.UNIT} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Unit Cost:</label>
              <input type="number" step="0.01" name="UnitCost" value={item.UnitCost} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Total Cost:</label>
              <input type="number" step="0.01" name="TotalCost" value={item.TotalCost} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Date Acquired:</label>
              <input type="date" name="DateAcquired" value={new Date(item.DateAcquired).toISOString().split('T')[0]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Property Tag No:</label>
              <input type="text" name="PropertyTagNo" value={item.PropertyTagNo} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Account Classification Code:</label>
              <input type="text" name="AccountClassificationCode" value={item.AccountClassificationCode} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Estimated Useful Life:</label>
              <input type="number" name="EstimatedUsefulLife" value={item.EstimatedUsefulLife} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Remarks:</label>
              <input type="text" name="Remarks" value={item.Remarks} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Office:</label>
              <input type="text" name="Office" value={item.Office} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="flex justify-center">
            <button type="button" onClick={handleSave} className="mt-4 bg-blue-500 text-white px-8 py-2 rounded-md hover:bg-blue-600">Save</button>
          </div>
        </form>
      )}
    </div>
    </div>
  );
};

export default Item;
