import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({ url }) => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "Food provides essential nutrients for overall health and well-being",
    price: "",
    category: "Salad" // Default matches one of the dropdown options
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", parseFloat(data.price) || 0);
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "Food provides essential nutrients for overall health and well-being",
          price: "",
          category: "Salad"
        });
        setImage(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error adding food item");
      console.error("Add error: ", error);
    }
  };

  return (
      <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
          <div className="add-image-upload flex-col">
            <p>Upload image</p>
            <label htmlFor="image">
              <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
            </label>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
          </div>
          <div className="add-product-name flex-col">
            <p>Product name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type name here' required />
          </div>
          <div className="add-product-description flex-col">
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Type description here' required></textarea>
          </div>
          <div className="add-category-price">
            <div className="add-category flex-col">
              <p>Product category</p>
              <select
                  onChange={onChangeHandler}
                  value={data.category}
                  name="category"
                  required
              >
                <option value="Salad">Salad</option>
                <option value="Roll">Roll</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodle">Noodle</option>
              </select>
            </div>
            <div className="add-price flex-col">
              <p>Product Price</p>
              <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$1' required />
            </div>
          </div>
          <button type='submit' className='add-button'>ADD</button>
        </form>
      </div>
  );
};

export default Add;
