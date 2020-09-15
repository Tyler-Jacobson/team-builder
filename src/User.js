import React, { useState } from "react";

export default function Friend(props) {
  const { details } = props;
  console.log(details);
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>;
  }

  return (
    <div className="friend container">
      <h2>Name:{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  );
}
