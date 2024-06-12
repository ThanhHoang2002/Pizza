/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AddFood = () => {
  const [foodId, setFoodId] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [des, setDes] = useState('');
  const [foodCategory, setFoodCategory] = useState('Starter');
  const [message, setMessage] = useState('');
  const param= useParams();
  const id = param.food_id;
  useEffect(() => {
    if (id !== 0) {
      // Fetch food data if id is not 0 (editing mode)
      const fetchFoodData = async () => {
        try {
            const token = localStorage.getItem('token');
          const response = await axios.get(`http://localhost:8080/api/v1/food/search/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
          );
          const { foodId, name, price, image, des, foodCategory } = response.data.result;
          setFoodId(foodId);
          setName(name);
          setPrice(price);
          setImageFile(image);
          setDes(des);
          setFoodCategory(foodCategory);
        } catch (error) {
          console.error('Error:', error);
        }
      };
      fetchFoodData();
    }
  }, [id]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData();
        formData.append('foodId', foodId);
        formData.append('name', name);
        formData.append('price', parseInt(price));
        formData.append('image', "/asds");
        formData.append('des', des);
        formData.append('foodCategory', foodCategory);
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:8080/api/v1/food/add',formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
      );
      
      console.log(response.data);
      setMessage('Product added successfully');
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to add product');
    }
  };

  return (
    <div className="container mx-auto p-4 mt-5">
      <h2 className="text-3xl font-bold mb-4">{id ==0 ? 'Thêm đồ ăn' : 'Chỉnh sửa đồ ăn'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='flex w-full'>
            <div className='w-4/5'>
            <label className="block mb-2">Food ID</label>
            <input
                type="text"
                value={foodId}
                onChange={(e) => setFoodId(e.target.value)}
                required
                className="w-full p-2 border rounded"
                disabled={true}
            />
            </div>
            <div className='ml-5 w-4/5'>
            <label className="block mb-2">Name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border rounded"
            />
            </div>
        </div>
        <div className='flex w-full'>
            <div className='w-4/5'>
            <label className="block mb-2">Price</label>
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="w-full p-2 border rounded"
            />
            </div>
            <div className='w-4/5 ml-5'>
            <label className="block mb-2">Food Category</label>
            <select
                value={foodCategory}
                onChange={(e) => setFoodCategory(e.target.value)}
                className="w-full p-2 border rounded"
            >
                <option value="Starter">Starter</option>
                <option value="Drink">Drink</option>
                <option value="Chicken">Chicken</option>
            </select>
            </div>
        </div>
        
        <div>
          <label className="block mb-2">Image</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Description</label>
          <textarea
            value={des}
            onChange={(e) => setDes(e.target.value)}
            rows={4}
            className="w-full p-2 border rounded"
          />
        </div>
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Product
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default AddFood;
