import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CropClinic = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    alert("Image uploaded successfully!");
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set image preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Upload Image Of Infected Plant</h2>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Select Image</label>
          <input
            type="file"
            accept="image/*"
            {...register('image', { required: 'Please upload an image' })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            onChange={handleImagePreview}
          />
          {errors.image && <span className="text-red-500 text-sm">{errors.image.message}</span>}
        </div>

        {imagePreview && (
          <div className="mb-4">
            <p className="text-gray-700 mb-2">Image Preview:</p>
            <img src={imagePreview} alt="Preview" className="w-full rounded-md" />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default CropClinic;

