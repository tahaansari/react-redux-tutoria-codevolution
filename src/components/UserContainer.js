import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "../redux";

const UserContainer = () => {
  const users = useSelector((state) => state.user);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return users.loading == true ? (
    <h2>Loading...</h2>
  ) : users.error != "" ? (
    <h2>There is a Error</h2>
  ) : (
    <h3>{users.data && users.data.map((user) => <p>{user.name}</p>)}</h3>
  );
};

export default UserContainer;
