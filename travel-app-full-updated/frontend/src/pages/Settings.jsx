import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Settings() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="pb-24 min-h-screen bg-light dark:bg-dark">
      <header className="px-4 pt-5 flex items-center gap-3 mb-4">
        <Link to="/profile" className="text-lg dark:text-white">
          ←
        </Link>
        <h1 className="text-lg font-semibold text-slate-900 dark:text-white">
          Settings
        </h1>
      </header>

      <main className="px-4 space-y-3">
        <SettingRow
          label="Dark mode"
          type="switch"
          enabled={darkMode}
          onToggle={() => setDarkMode(!darkMode)}
        />

        <SettingRow
          label="Push notifications"
          type="switch"
          enabled={true}
        />

        <SettingRow
          label="Email updates"
          type="switch"
          enabled={false}
        />

        <SettingRow label="Language" value="English" />
        <SettingRow label="Currency" value="USD ($)" />
      </main>
    </div>
  );
}

function SettingRow({ label, type, value, enabled, onToggle }) {
  return (
    <div className="flex justify-between items-center px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-slate-100 dark:border-gray-700">
      <span className="text-sm text-slate-800 dark:text-white">
        {label}
      </span>

      {type === "switch" ? (
        <button
          onClick={onToggle}
          className={`w-10 h-5 rounded-full flex items-center px-0.5 transition ${
            enabled ? "bg-primary" : "bg-slate-200"
          }`}
        >
          <span
            className={`h-4 w-4 rounded-full bg-white shadow transform transition ${
              enabled ? "translate-x-5" : ""
            }`}
          />
        </button>
      ) : (
        <span className="text-xs text-slate-500 dark:text-slate-300">
          {value}
        </span>
      )}
    </div>
  );
}

export default Settings;
