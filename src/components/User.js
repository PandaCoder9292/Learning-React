import { useState } from "react";

const User = (props) => {
  const { name } = props;
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Kurukshetra, Haryana</h3>
      <h4>Reach Me: gargpranshuwork92@gmail.com</h4>
    </div>
  );
};

export default User;
