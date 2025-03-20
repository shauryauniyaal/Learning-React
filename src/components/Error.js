import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="error-msg error">
      <h1>Oops!</h1>
      <h2>Something went wrong</h2>
      <h3>{`${err.status} : ${err.statusText}`}</h3>
    </div>
  );
};

export default Error;
