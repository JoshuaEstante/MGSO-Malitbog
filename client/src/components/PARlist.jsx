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
      const response = await axios.get('http://localhost:5000/api/parRoute');
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (item) => {
    navigate(`/item/${item._id}`);
  };

  const handleDelete = async (id) => {
    // Placeholder delete logic, you can replace it with your actual delete logic
    console.log("Deleting item with ID:", id);
    try {
      await axios.delete(`http://localhost:5000/api/parRoute/${id}`);
      // Update the list after deletion
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  // Filter items based on search term
  const filteredItems = items.filter(item =>
    (item.Office && item.Office.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (item.ID && item.ID.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by office or ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded-md shadow-sm mb-4"
      />
      <ul className="space-y-4">
        {filteredItems.map(item => (
          <li key={item._id} className="p-4 border rounded-md shadow-sm flex justify-between items-center bg-white">
            <div>
              <h2 className="text-xl font-bold">ID: {item.ID}</h2>
              <p className="text-gray-700">Description: {item.Description}</p>
              <p className="text-gray-700">QTY: {item.QTY}</p>
              <p className="text-gray-700">UNIT: {item.UNIT}</p>
              <p className="text-gray-700">UnitCost: {item.UnitCost}</p>
              <p className="text-gray-700">TotalCost: {item.TotalCost}</p>
              <p className="text-gray-700">DateAcquired: {item.DateAcquired}</p>
              <p className="text-gray-700">PropertyTagNo: {item.PropertyTagNo}</p>
              <p className="text-gray-700">Account Classification Code: {item.AccountClassificationCode}</p>
              <p className="text-gray-700">Estimated Useful Life: {item.EstimatedUsefulLife}</p>
              <p className="text-gray-700">Remarks: {item.Remarks}</p>
              <p className="text-gray-700">Office: {item.Office}</p>
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

export default PARList;
