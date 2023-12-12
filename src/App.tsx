function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold text-center">Weather Info</h1>
      <div>
        <h2>Location : Calgary</h2>
        <h2>Current Temperature : 2°C</h2>
        <h3>Today's Max: 5°C</h3>
        <h3>Today's Min: 0°C</h3>
      </div> */}

      <div className="flex flex-col items-center justify-center h-screen bg-blue-200">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Weather Info</h1>
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
    </>
  );
}

export default App;
