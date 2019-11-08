import React, { useState } from "react";
import TeamMemberForm from "./components/MemberForm";
import Members from "./components/Members";

import "./App.css";

function App() {
  const [member, setMember] = useState([
    {
      id: 0,
      name: "Mike",
      email: "hhhhhhh@gmail.com",
      role: "Backend Developer"
    },
    {
      id: 1,
      name: "Jan",
      email: "jjjjjjjj@gmail.com",
      role: "Frontend Developer"
    },
    {
      id: 2,
      name: "Terrell",
      email: "ttttttt@gmail.com",
      role: "Fullstack Developer"
    },
    { id: 3, name: "Lisa", email: "lllllll@gmail.com", role: "iOS Developer" },
    {
      id: 4,
      name: "Jodie",
      email: "jojojojojoj@gmail.com",
      role: "Data Scientist"
    }
  ]);
  const newMember = members => {
    const addMember = setMember([...member, members]);
  };

  return (
    <div>
      <TeamMemberForm newMember={newMember} />

      <Members member={member} />
    </div>
  );
}

export default App;
