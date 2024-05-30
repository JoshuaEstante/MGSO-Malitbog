import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PARList = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/parRoute');
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (item) => {
    navigate(`/item/${item._id}`);
  };

  const handleDelete = async (id) => {
    console.log("Deleting item with ID:", id);
    try {
      await axios.delete(`http://localhost:3000/api/parRoute/${id}`);
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredItems = items.filter(item =>
    (item.Office && item.Office.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (item.ID && item.ID.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="overflow-x-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by office or ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="py-2 px-2 border rounded-md shadow-sm"
        />
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">QTY</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UNIT</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UnitCost</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TotalCost</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Acquired</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property Tag No.</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Classification Code</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estimated Useful Life</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Office</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredItems.map(item => (
            <tr key={item._id}>
              <td className="px-3 py-2 whitespace-wrap text-sm text-gray-500">{item.ID}</td>
              <td className="px-3 py-2 whitespace-wrap text-sm text-gray-500">{item.Description}</td>
              <td className="px-3 py-2 whitespace-wrap text-sm text-gray-500">{item.QTY}</td>
              <td className="px-3 py-2 whitespace-wrap text-sm text-gray-500">{item.UNIT}</td>
              <td className="px-3 py-2 whitespace-wrap text-sm text-gray-500">{item.UnitCost}</td>
              <td className="px-3 py-2 whitespace-wrap text-sm text-gray-500">{item.TotalCost}</td>
              <td className="px-3 py-2 whitespace-wrap text-sm text-gray-500">{item.DateAcquired}</td>
              <td className="px-3 py-2 whitespace-wrap text-sm text-gray-500">{item.PropertyTagNo}</td>
              <td className="px-3 py-2 whitespace-wrap text-sm text-gray-500">{item.AccountClassificationCode}</td>
              <td className="px-3 py-2 whitespace-wrap text-sm text-gray-500">{item.EstimatedUsefulLife}</td>
              <td className="px-3 py-2 whitespace-wrap text-sm text-gray-500">{item.Remarks}</td>
              <td className="px-3 py-2 whitespace-wrap text-sm text-gray-500">{item.Office}</td>
              <td className="px-3 py-2 whitespace-wrap text-center text-sm font-medium ">
                <button
                  onClick={() => handleEdit(item)}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-600 hover:text-red-900 ml-4"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PARList;
