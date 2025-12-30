import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const tabs = [
  { to: "/home", label: "Home", icon: "🏠" },
  { to: "/search", label: "Search", icon: "🔍" },
  { to: "/favorites", label: "Saved", icon: "❤️" },
  { to: "/profile", label: "Profile", icon: "👤" }
];

function BottomNav() {
  const location = useLocation();

  // Hide on auth screens
  if (
    ["/", "/login", "/signup"].includes(location.pathname)
  ) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-slate-200">
      <div className="max-w-[420px] mx-auto flex justify-around py-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs font-medium transition ${
                isActive
                  ? "text-primary"
                  : "text-slate-500 hover:text-slate-800"
              }`
            }
          >
            <span className="text-lg mb-0.5">{tab.icon}</span>
            <span>{tab.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default BottomNav;
