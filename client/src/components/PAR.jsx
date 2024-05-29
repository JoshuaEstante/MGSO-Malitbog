import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PAR = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    ID: '',
    QTY: 0,
    UNIT: '',
    UnitCost: 0,
    TotalCost: 0,
    Description: '',
    DateAcquired: '',
    PropertyTagNo: '',
    AccountClassificationCode: '',
    EstimatedUsefulLife: 0,
    Remarks: ''
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/parRoute');
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/parRoute/${editId}`, form);
      } else {
        await axios.post('http://localhost:5000/api/parRoute', form);
      }
      setForm({
        ID: '',
        QTY: 0,
        UNIT: '',
        UnitCost: 0,
        TotalCost: 0,
        Description: '',
        DateAcquired: '',
        PropertyTagNo: '',
        AccountClassificationCode: '',
        EstimatedUsefulLife: 0,
        Remarks: ''
      });
      setEditId(null);
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (item) => {
    setForm({ ...item, DateAcquired: item.DateAcquired.split('T')[0] });
    setEditId(item._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/parRoute/${id}`);
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">PAR Management</h1>
      
      <form className="mb-8 bg-gray-50 p-4 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">ID</label>
            <input
              type="text"
              name="ID"
              value={form.ID}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">QTY</label>
            <input
              type="number"
              name="QTY"
              value={form.QTY}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">UNIT</label>
            <input
              type="text"
              name="UNIT"
              value={form.UNIT}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">UnitCost</label>
            <input
              type="number"
              step="0.01"
              name="UnitCost"
              value={form.UnitCost}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">TotalCost</label>
            <input
              type="number"
              step="0.01"
              name="TotalCost"
              value={form.TotalCost}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <input
              type="text"
              name="Description"
              value={form.Description}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">DateAcquired</label>
            <input
              type="date"
              name="DateAcquired"
              value={form.DateAcquired}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">PropertyTagNo</label>
            <input
              type="text"
              name="PropertyTagNo"
              value={form.PropertyTagNo}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">AccountClassificationCode</label>
            <input
              type="text"
              name="AccountClassificationCode"
              value={form.AccountClassificationCode}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">EstimatedUsefulLife</label>
            <input
              type="number"
              name="EstimatedUsefulLife"
              value={form.EstimatedUsefulLife}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Remarks</label>
            <textarea
              name="Remarks"
              value={form.Remarks}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {editId ? 'Update' : 'Create'}
        </button>
      </form>
      
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item._id} className="p-4 border rounded-md shadow-sm flex justify-between items-center bg-white">
            <div>
              <h2 className="text-xl font-bold">{item.ID}</h2>
              <p className="text-gray-700">{item.Description}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(item)}
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PAR;
