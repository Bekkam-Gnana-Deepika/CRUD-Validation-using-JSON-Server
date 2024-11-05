import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from './components/layouts/Footer';
import { ToastContainer } from "react-toastify";
import Login from "./components/register/Login";
import Register from "./components/register/Register";
import Pnf from "./components/Pnf";
import Dashboard from "./components/dashboard/Dashboard";
import Create from "./components/create/Create";
import ProtectedRoute from "./components/protect-route/ProtectedRoute";
import Update from "./components/update/Update";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <ToastContainer autoClose={4000} position={"top-right"} />
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path={`/`} element={<Dashboard />} /> 
        <Route path={`/dashboard`} element={<Dashboard />} />
        <Route path={`/create`} element={<Create />} />
        <Route path={`/update/:id`} element={<Update />} />
      </Route>
      <Route path={`/login`} element={<Login />} />
      <Route path={`/register`} element={<Register />} />
      <Route path={`/*`} element={<Pnf />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
