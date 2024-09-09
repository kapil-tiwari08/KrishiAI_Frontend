import { useState } from "react";

function CropRecommendation() {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorous: "",
    pottasium: "",
    phlevel: "",
    rainfall: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const [prediction, setPrediction] = useState(null); // To store the prediction response

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }

  // Function to send form data to the backend API
  const predictCrop = async () => {
    const response = await fetch(
      "https://krishiaibackend-production.up.railway.app/api/v1/features/predict-crop/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nitrogen: formData.nitrogen,
          phosphorous: formData.phosphorous,
          pottasium: formData.pottasium,
          ph: formData.phlevel,
          rainfall: formData.rainfall,
          city: formData.city,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      setPrediction(data); // Update prediction state with the response
      console.log(data); // For debugging
    } else {
      console.error("Failed to fetch prediction");
    }
  };

  // Form submit handler
  function submitHandler(event) {
    event.preventDefault();
    console.log("Form Data: ", formData);
    predictCrop(); // Call the API with the form data
  }

  return (
    <div className="flex flex-col items-center mt-6">
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
      >
        <div className="mb-4">
          <label
            htmlFor="soiltype"
            className="block text-gray-700 font-medium mb-2 text-center"
          >
            CROP RECOMMENDER
          </label>
          <label
            htmlFor="nitrogen"
            className="block text-gray-700 font-medium mb-2"
          >
            Nitrogen
          </label>
          <input
            type="text"
            name="nitrogen"
            placeholder="Enter the value of Nitrogen (50)"
            value={formData.nitrogen}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="nitrogen"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phosphorous"
            className="block text-gray-700 font-medium mb-2"
          >
            Phosphorous
          </label>
          <input
            type="text"
            name="phosphorous"
            placeholder="Enter the value of Phosphorous (50)"
            value={formData.phosphorous}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="phosphorous"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="pottasium"
            className="block text-gray-700 font-medium mb-2"
          >
            Pottasium
          </label>
          <input
            type="text"
            name="pottasium"
            placeholder="Enter the value of Pottasium (50)"
            value={formData.pottasium}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="pottasium"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phlevel"
            className="block text-gray-700 font-medium mb-2"
          >
            ph level
          </label>
          <input
            type="text"
            name="phlevel"
            placeholder="Enter the value"
            value={formData.phlevel}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="phlevel"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="rainfall"
            className="block text-gray-700 font-medium mb-2"
          >
            Rainfall (in mm)
          </label>
          <input
            type="text"
            name="rainfall"
            placeholder="Enter the value"
            value={formData.rainfall}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="rainfall"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-gray-700 font-medium mb-2"
          >
            City
          </label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="city"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Predict
        </button>
      </form>

      {/* Display the prediction result if available */}
      {prediction && (
        <div className="mt-6 p-4 bg-green-100 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-2">Prediction Result</h2>
          <p>{prediction.prediction}</p>
        </div>
      )}
    </div>
  );
}

export default CropRecommendation;
