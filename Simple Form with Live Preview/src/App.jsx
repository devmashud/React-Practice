import { useState } from "react";
import "./App.css";

function App() {
  const [Form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const ValueChange = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Data:\nUsername: ${Form.username}\nEmail: ${Form.email}`);
  };

  return (
    <>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <div>
        <h2>Mini Form Project</h2>
            <input
              type="text"
              name="username"
              value={Form.username}
              onChange={ValueChange}
              placeholder="Username"
            />
            <br />
            <input
              type="email"
              name="email"
              value={Form.email}
              onChange={ValueChange}
              placeholder="Email"
            />
            <br />
            <input
              type="password"
              name="password"
              value={Form.password}
              onChange={ValueChange}
              placeholder="Password"
            />
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>

        <div>
          <h3>Live Preview</h3>
          <p>Username : {Form.username}</p>
          <p>Email: {Form.email}</p>
          <p>Password: {Form.password}</p>
        </div>
      </div>
    </>
  );
}

export default App;
