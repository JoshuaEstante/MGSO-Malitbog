// PARForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PARForm = ({ editId, setEditId, fetchItems }) => {
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
    Remarks: '',
    Office:''
  });

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
        Remarks: '',
        Office:''
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="mb-8 bg-gray-50 p-4 rounded-lg shadow-md" onSubmit={handleSubmit}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div>
        <label className="block text-sm font-medium text-gray-700">Office</label>
        <input
          type="test"
          name="Office"
          value={form.Office}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
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
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-onyx hover:bg-dim-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {editId ? 'Update' : 'Create'}
    </button>
    </form>
  );
};

export default PARForm;
