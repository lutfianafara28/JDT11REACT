import { DetailProduct, HomePage, Login } from "@pages";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route exact path="/detail-product/:id" element={<DetailProduct />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
