import React from "react";

// Components
import { UserCard } from "../../components/user-card/user-card.component";

// Style
import "./users-list.styles.css";

export const UsersList = (props) => {
  return (
    <div className="card-list">
      {props.users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
