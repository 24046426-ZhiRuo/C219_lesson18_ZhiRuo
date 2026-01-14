import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const location = useLocation();
  const email = location.state?.email;
  const name = location.state?.name;

  return (
    <div className="container">
      <h1>Thank You!</h1>

      {email && (
        <>
          <p>{name}, you're now registered for Red30 Tech.</p>
          <p>
            We've sent more details to <strong>{email}</strong>
          </p>
        </>
      )}
    </div>
  );
}

