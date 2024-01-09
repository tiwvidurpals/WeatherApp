const Home = () => {
  return (
    <div>
      {/* const axios = require('axios');
      const options = {
  method: 'GET',
  url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
  params: {
    lat: '38.5',
    lon: '-78.5'
  },
  headers: {
    'X-RapidAPI-Key': '4c50da5040mshf75aa74f17a1faap1bb575jsn94ac27ca284b',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
} */}
      <div className="flex flex-col items-center justify-center h-screen bg-black">
        <h1 className="text-4xl font-bold text-yellow-200 mb-6">
          Weather Info
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
          <h2 className="text-2xl font-semibold text-gray-800">
            Location: Calgary
          </h2>
          <div className="mt-4">
            <h2 className="text-xl text-gray-700">
              Current Temperature: <span className="font-semibold">2°C</span>
            </h2>
            <h3 className="text-lg text-gray-600 mt-2">
              Today's Max: <span className="font-medium">5°C</span>
            </h3>
            <h3 className="text-lg text-gray-600">
              Today's Min: <span className="font-medium">0°C</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };