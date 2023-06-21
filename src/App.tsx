import BeersPage from "./pages/BeersPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleBeerPage from "./pages/SingleBeerPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BeersPage />}></Route>
        <Route path="/details/:id" element={<SingleBeerPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
