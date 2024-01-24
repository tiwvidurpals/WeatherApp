import { Home } from "./assets/pages/home";
import Navbar from "./components/Navbar";
import DataProvider from "./utils/weatherContext";

function App() {
  return (
    <>
      <DataProvider>
        <Navbar />
        <Home />
      </DataProvider>
    </>
  );
}

export default App;
