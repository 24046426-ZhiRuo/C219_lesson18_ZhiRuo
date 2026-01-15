import { useState } from "react";

function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="form-page">
      <div className="form-card">
        {submitted ? (
          <div className="confirmation">
            <h1>Thank You, {name}!</h1>
            <p>
              You're now registered for <strong>{course}</strong>.
            </p>
            <p>
              We'll email to <strong>{email}</strong>
            </p>
          </div>
        ) : (
          <>
            <h1>Register your interest</h1>
            <p>Please register the course you are interested in.</p>

            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />

              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />

              <label>Course</label>
              <input
                type="text"
                value={course}
                onChange={e => setCourse(e.target.value)}
                required
              />

              <button className="submit-btn">Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Register;
