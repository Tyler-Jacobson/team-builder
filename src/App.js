import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import Form from "./Form";

const dummyData = [
  { name: "Timmy", email: "timmy@timmy.com", role: "Full Stack Engineer" },
];

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [userData, setUserData] = useState([dummyData]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = (evt) => {
    evt.preventDefault();
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    setUserData([...userData, newUser]);
    setFormValues(initialFormValues);
  };

  return (
    <div className="App">
      <h1>User Data</h1>
      <Form
        handleChange={change}
        handleSubmit={submit}
        formValues={formValues}
      />
      {userData.map((user, index) => {
        return <User key={index} details={user} />;
      })}
    </div>
  );
}

export default App;
