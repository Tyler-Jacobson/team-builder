import React from "react";

export default function form(props) {
  const { handleChange, handleSubmit, formValues } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          value={formValues.name}
        ></input><br/>
        <input
          name="email"
          type="text"
          onChange={handleChange}
          value={formValues.email}
        ></input><br/>
        <select name="role" onChange={handleChange} value={formValues.role}>
          <option value="Teacher">Teacher</option>
          <option value="User">User</option>
        </select><br/>
        <button>Submit</button>
      </form>
    </div>
  );
}
