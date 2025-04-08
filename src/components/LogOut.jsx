import React from "react";

export default function Logout({ onLogout, darkMode }) {
  const handleLogout = () => {
    localStorage.setItem("loggedIn", "false");
    onLogout(false);
  };

  return (
    <button
      onClick={handleLogout}
      className={`px-4 py-2 rounded font-medium transition cursor-pointer ${
        darkMode
          ? "bg-red-500 hover:bg-red-600 text-white"
          : "bg-red-100 hover:bg-red-200 text-red-700"
      }`}
    >
      Logout
    </button>
  );
}
