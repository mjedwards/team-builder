import React, { useState } from "react";
import Button from "./Button";
// import { teamMembers } from "../data";

const TeamMemberForm = props => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    role: ""
  });

  const onsubmit = event => {
    event.preventDefault();
    const addMember = {
      ...formInput,
      id: Date.now()
    };

    props.newMember(addMember);
    // teamMembers.push(formInput);
    console.log(addMember);
    setFormInput({
      name: "",
      email: "",
      role: ""
    });
  };

  const onchange = event => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <form onSubmit={onsubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={formInput.name}
            onChange={onchange}
          />
        </label>
        <label>
          Email:
          <input
            type='text'
            name='email'
            value={formInput.email}
            onChange={onchange}
          />
        </label>
        <label>
          Role:
          <input
            type='text'
            name='role'
            value={formInput.role}
            onChange={onchange}
          />
        </label>
        <Button />
      </form>
    </div>
  );
};

export default TeamMemberForm;
