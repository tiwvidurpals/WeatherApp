import create from 'zustand';

interface CityState {
  selectedCity: string;
  coordinates: string;
  setCity: (city: string) => void;
}

const cityCoordinates: Record<string, string> = {
  Waling: '27.9772, 83.7677',
  Kathmandu: '27.7172, 85.3240',
  Pokhara: '28.2096, 83.9856',
  Calgary: '51.0447, -114.0719',
  Winnipeg: '49.8954, -97.1385',
  Faro: '37.0165, -7.9352',
  Irving: '32.8140, -96.9489',
};

const useCityStore = create<CityState>((set) => ({
  selectedCity: '',
  coordinates: '',
  setCity: (city: string) => {
    set({
      selectedCity: city,
      coordinates: cityCoordinates[city] || '',
    });
  },
}));

export default useCityStore;
