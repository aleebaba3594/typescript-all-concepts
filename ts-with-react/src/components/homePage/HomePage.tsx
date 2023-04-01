import React, { useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/CustomHooksForRedux";
import { addUser, selectUsers } from "../../redux/slices/UserSlices";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  const [name, setName] = useState<string>("");

  return (
    <div>
      <h3>Redux Toolkit with Typescript</h3>
      <p>{JSON.stringify(users)}</p>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => dispatch(addUser({ id: users.length + 1, name }))}>
        Add User
      </button>
    </div>
  );
};
export default HomePage;
