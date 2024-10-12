import { useState } from "react";
import "./styles.css";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);

  const roles = [
    "admin",
    "alumni",
    "counsellor",
    "super_admin",
    "admission",
    "reception",
    "event",
    "College Dekho",
    "Contact",
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(selectedRoles);
  };

  const handleRoleChange = (e) => {
    const value = e.target.value;
    // Check if the role is already selected
    if (value && !selectedRoles.includes(value)) {
      setSelectedRoles([...selectedRoles, value]);
    }
  };

  const removeRole = (roleToRemove) => {
    setSelectedRoles(selectedRoles.filter((role) => role !== roleToRemove));
  };

  return (
    <div>
      <h1>Create New User</h1>
      <label>Roles</label>
      <div className="dropdown-container">
        <div className="selected-roles">
          {selectedRoles.map((role) => (
            <span key={role} className="role-chip">
              {role}
              <button onClick={() => removeRole(role)} className="remove-btn">
                &times;
              </button>
            </span>
          ))}
        </div>
        <select onChange={handleRoleChange} placeholder="Select roles">
          <option value="" disabled>
            Select roles
          </option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <label>First Name</label>
      <input
        type="text"
        placeholder="Enter your first name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label>Last Name</label>
      <input
        type="text"
        placeholder="Enter your last name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <button className="cancel-btn">Cancel</button>
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}
