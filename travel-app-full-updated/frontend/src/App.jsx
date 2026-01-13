import React from "react";
import { Routes, Route } from "react-router-dom";
import BottomNav from "./components/BottomNav.jsx";
import Help from "./pages/Help.jsx";
import FAQDetail from "./pages/FAQDetail.jsx";
import Category from "./pages/Category.jsx";

import Start from "./pages/Start.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import Destinations from "./pages/Destinations.jsx";
import DestinationDetails from "./pages/DestinationDetails.jsx";
import Search from "./pages/Search.jsx";
import Favorites from "./pages/Favorites.jsx";
import Profile from "./pages/Profile.jsx";
import MyTrips from "./pages/MyTrips.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Settings from "./pages/Settings.jsx";
import Booking from "./pages/Booking.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/help" element={<Help />} />
<Route path="/faq/:id" element={<FAQDetail />} />

        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<DestinationDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/settings" element={<Settings />} />
              <Route path="/my-trips" element={<ProtectedRoute><MyTrips /></ProtectedRoute>} />
              <Route path="/category/:type" element={<Category />} />
        <Route path="/booking/:id" element={<Booking />} />
        </Routes>
      <BottomNav />
    </>
  );
}

export default App;
