import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1> 🫨 OOPs!!!! Something Went WRONG</h1>
      <h3>
        {" "}
        Error - {err.status} : 😥 Page {err.statusText}{" "}
      </h3>
    </div>
  );
};

export default Error;
