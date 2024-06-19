// q: "51.0447, -114.0719", //Calgary
//q: "27.7172, 85.3240", //Kathmandu
//q: "28.2096, 83.9856", //Pokhara
//q: "27.9772, 83.7677", // Waling
//q: "49.8954, -97.1385", // Winnipeg
// q: "37.0165, -7.9352", // Faro
// q: "32.8140, -96.9489", // Irving


// q: "51.0447, -114.0719", //Calgary
//q: "27.7172, 85.3240", //Kathmandu
//q: "28.2096, 83.9856", //Pokhara
//q: "27.9772, 83.7677", // Waling
//q: "49.8954, -97.1385", // Winnipeg
// q: "37.0165, -7.9352", // Faro
// q: "32.8140, -96.9489", // Irving



import React from 'react';
import useCityStore from '../../zustand/store';

const cities = [
  'Waling',
  'Kathmandu',
  'Pokhara',
  'Calgary',
  'Winnipeg',
  'Faro',
  'Irving',
];

const Dropdown: React.FC = () => {
  const { selectedCity, setCity } = useCityStore();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value);
  };

  return (
    <div className="w-64 p-4 pb-20">
      <label htmlFor="city" className="block text-md font-medium text-yellow-200">
        Select a city
      </label>
      <select
        id="city"
        name="city"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        value={selectedCity}
        onChange={handleChange}
      >
        <option value="" disabled>Select a city...</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      {selectedCity && (
        <div className="mt-2 text-yellow-200 text-md">
          You selected: <strong>{selectedCity}</strong>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
