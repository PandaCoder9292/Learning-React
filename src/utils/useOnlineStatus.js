import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineState, setonlineState] = useState(true);
  //check for online
  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlineState(false);
    });

    window.addEventListener("online", () => {
      setonlineState(true);
    });
  }, []);
  return onlineState;
};

export default useOnlineStatus;
