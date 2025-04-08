import { useState } from "react";

export default function SignUp({ onAuth, darkMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleSignUp = () => {
    localStorage.setItem("user", JSON.stringify({ email, password }));
    setMessage({ text: "Sign up successful! Now login.", type: "success" });
    setTimeout(() => onAuth("login"), 1500);
  };

  return (
    <div className={`max-w-sm mx-auto mt-10 p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>
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
        className={`w-full p-2 mb-4 rounded border ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"}`}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSignUp}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
      >
        Sign Up
      </button>
      {message && (
        <span className={`block mt-4 text-center ${message.type === "success" ? "text-green-500" : "text-red-500"}`}>
          {message.text}
        </span>
      )}
    </div>
  );
}
