import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Product";
import Profile from "./pages/Profile";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./context/auth";
import PrivateRoute from "./components/PrivateRoute";
import Sell from "./pages/Sell";
import MyFavorites from "./pages/MyFavorites";
import Ad from "./pages/Ad";
import EditAd from "./pages/EditAd";
import None from "./components/None";
import Chat from "./pages/Chat";
import PrivacyPolicy from "./components/FooterContent/PrivacyPolicy";

import AboutUs from "./components/FooterContent/AboutUs";
import HowToUse from "./components/FooterContent/HowToUse";
import TermConditions from "./components/FooterContent/TermConditions";
import Product from "./pages/Product";
import HomePageHeader from "./components/Home";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/sell" element={<Sell />} />
            <Route path="/favorites" element={<MyFavorites />} />
            <Route path="/chat" element={<Chat />} />
          </Route>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/:category/:id" element={<Ad />} />
          <Route path="/edit-ad/:id" element={<EditAd />} />
          <Route path="/products" element={<Product />} />
          <Route path="/" element={<HomePageHeader/>} />

          <Route path="*" element={<None />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TermConditions />} />

          <Route path="about-us" element={<AboutUs />} />
          <Route path="how-to-use" element={<HowToUse />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
export default App;
