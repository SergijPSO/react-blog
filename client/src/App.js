import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import IndexPage from "./ pages/IndexPage";
import LoginPage from "../src/ pages/LoginPage";
import RegisterPage from "../src/ pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
