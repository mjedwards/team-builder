import React from "react";
// import { teamMembers } from "../data";

const Members = props => {
  return (
    <div>
      <ul>
        <h3>Members:</h3>

        {props.member.map(tm => {
          return (
            <li key={tm.id}>
              <p>
                <h4>Name:</h4> {tm.name}
              </p>{" "}
              <p>
                <h4>Email:</h4> {tm.email},
              </p>{" "}
              <p>
                <h4>Role:</h4> {tm.role}
              </p>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Members;
