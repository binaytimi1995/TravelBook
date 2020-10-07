import React from "react";

import UsersItem from "./UserItem";
import "./UsersList.css";

const UsersList = (props) => {
  if (props.items.length) {
    return (
      <div className="center">
        <h2>No Users Found</h2>
      </div>
    );
  }
  return (
    <ul>
      {props.items.map((user) => (
        <UsersItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;