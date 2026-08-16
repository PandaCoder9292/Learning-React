import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Panda User",
});

export default UserContext;
