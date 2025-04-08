import { useState } from "react";

export default function Login({ onLogin, darkMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.email === email && storedUser?.password === password) {
      localStorage.setItem("loggedIn", "true");
      onLogin(true);
    } else {
      setMessage({ text: "Invalid credentials", type: "error" });
    }
  };

  return (
    <div className={`max-w-sm mx-auto mt-10 p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className={`w-full p-2 mb-4 rounded border ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"}`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        autoComplete="true"
        className={`w-full p-2 mb-4 rounded border ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"}`}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded cursor-pointer"
      >
        Login
      </button>
      {message && (
        <span className={`block mt-4 text-center ${message.type === "error" ? "text-red-500" : "text-green-500"}`}>
          {message.text}
        </span>
      )}
    </div>
  );
}
