import { useState } from "react";
import defaultProfileImage from "@/assets/profile.svg";

export function UserListItem({ user }) {
  return (
    <li
      className={"list-group-item list-group-item-action"}
      onClick={() => setSelected(!selected)}
    >
      <img
        width="30"
        className="img-fluid rounded-circle shadow-sm"
        src={defaultProfileImage}
      />
      <span className="ms-2">{user.username}</span>
    </li>
  );
}
