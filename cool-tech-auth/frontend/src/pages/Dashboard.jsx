import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [credentials, setCredentials] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const divisionId = "66e71fdc132c1347d7e0a6cf"; // Replace this with the actual division ID you're working with

  // Fetch credentials when the component loads
  useEffect(() => {
    const fetchCredentials = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/credentials/${divisionId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setCredentials(response.data);
      } catch (error) {
        toast.error(error.response?.data?.msg || "Error fetching credentials");
      }
    };

    fetchCredentials();
  }, [divisionId]);

  // Function to handle adding a new credential
  const handleAddCredential = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/credentials/${divisionId}`,
        { name, username, password },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setCredentials([...credentials, response.data.credential]);
      toast.success("Credential added successfully");
      setName("");
      setUsername("");
      setPassword("");
    } catch (error) {
      toast.error(error.response?.data?.msg || "Error adding credential");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <p>Manage your credentials below.</p>

      <form onSubmit={handleAddCredential}>
        <div className="mb-3">
          <label>Credential Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Credential
        </button>
      </form>

      <h3 className="mt-5">Credentials</h3>
      <ul className="list-group">
        {credentials.map((cred) => (
          <li key={cred._id} className="list-group-item">
            <strong>{cred.name}</strong> - {cred.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
