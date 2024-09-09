import { useState } from "react";

function FertilizerRecommendation() {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorous: "",
    pottasium: "",
    cropgrow: "",
  });

  const [prediction, setPrediction] = useState(null); // To store the prediction response

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }

  // Function to send form data to the backend API
  const predictFertilizer = async () => {
    const response = await fetch(
      "https://krishiaibackend-production.up.railway.app/api/v1/features/predict-fertilizer/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nitrogen: formData.nitrogen,
          phosphorous: formData.phosphorous,
          pottasium: formData.pottasium,
          crop_name: formData.cropgrow,
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
    predictFertilizer(); // Call the API with the form data
  }

  return (
    <div className="flex flex-col items-center mt-6">
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
      >
        <label
          htmlFor="soiltype"
          className="block text-gray-700 font-medium mb-2 text-center"
        >
          FERTILIZER RECOMMENDER
        </label>

        <div className="mb-4">
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
            htmlFor="cropgrow"
            className="block text-gray-700 font-medium mb-2"
          >
            Crop you want to grow
          </label>
          <select
            name="cropgrow"
            id="cropgrow"
            placeholder="Select crop"
            value={formData.cropgrow}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="rice">Rice</option>
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
            <option value="banana">Banana</option>
            <option value="mango">Mango</option>
            <option value="cotton">Cotton</option>
            <option value="Jute">Jute</option>
            <option value="grapes">Grapes</option>
            <option value="coffee">Coffee</option>
            <option value="papaya">Papaya</option>
            <option value="chickpea">Chickpea</option>
            <option value="lentil">Lentil</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Predict
        </button>
      </form>

      {prediction && (
        <div
          className="mt-6 mb-2  p-4 bg-green-100 rounded-lg text-left"
          dangerouslySetInnerHTML={{ __html: prediction.data || prediction }} // Render HTML
        />
      )}
    </div>
  );
}

export default FertilizerRecommendation;
