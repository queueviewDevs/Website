import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  
  const startVideoFeed = async () => {

    const res = await fetch("http://queueview.ca:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
    
      if (!response.ok) throw new Error("Authorization failed");
    
      const d = await res.json();
      setToken(d.token); // Save the token

    try {
      const response = await fetch("http://queueview.ca:8000/api/cameras/pi_0001/stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            stream: "true",
        }),
    })
    console.log(response)
    if (!response.ok) throw new Error("Failed to start video feed");

      alert("Video feed started successfully");
    } catch (error) {
      console.error("Error starting video feed:", error);
      alert("Failed to start video feed");
    }
  };

  const stopVideoFeed = async () => {
    try {
      const response = await fetch("http://queueview.ca:8000/api/cameras/pi_0001/stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            stream: "false",
        }),
      });
      console.log(response)
      if (!response.ok) throw new Error("Failed to stop video feed");

      alert("Video feed stopped successfully");
    } catch (error) {
      console.error("Error stopping video feed:", error);
      alert("Failed to stop video feed");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex justify-center items-center">
        {!loggedIn ? (
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h3 className="text-xl font-bold mb-6 text-center">Admin Login</h3>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="Username" className="block font-semibold mb-1">
                  Username:
                </label>
                <input
                  type="text"
                  id="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  autoComplete="off"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="password" className="block font-semibold mb-1">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="off"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Login
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Admin Controls</h3>
            <div className="space-x-4">
              <button
                onClick={startVideoFeed}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Start Video Feed
              </button>
              <button
                onClick={stopVideoFeed}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Stop Video Feed
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
