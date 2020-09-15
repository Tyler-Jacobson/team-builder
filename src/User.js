import React from "react";

export default function Friend(props) {
  const { details } = props;
  console.log(details.role);
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>;
  }

  return (
    <div className="friend container">
      <h3>Name:{details.name}</h3>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  );
}
