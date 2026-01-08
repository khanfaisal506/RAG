import "./register.css";
import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // =========================
  // VALIDATION
  // =========================
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name) newErrors.name = "Full name is required";

    if (!form.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(form.email))
      newErrors.email = "Enter a valid email address";

    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Minimum 6 characters";

    if (form.confirmPassword !== form.password)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      // Simulated API call
      await new Promise((res) => setTimeout(res, 2000));
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // SUCCESS VIEW
  // =========================
  if (success) {
    return (
      <section className="register success-view">
        <h1>ACCOUNT CREATED</h1>
        <p>Redirecting to login...</p>
      </section>
    );
  }

  return (
    <section className="register">
      <div className="register-card">
        <h1 className="register-title">CREATE ACCOUNT</h1>
        <p className="register-subtitle">
          Join the Electric Xtra ecosystem
        </p>

        <form onSubmit={handleSubmit}>
          {/* NAME */}
          <div className={`input-group ${errors.name ? "error" : ""}`}>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          {/* EMAIL */}
          <div className={`input-group ${errors.email ? "error" : ""}`}>
            <label>Email</label>
            <input
              type="email"
              placeholder="you@electricxtra.tech"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && (
              <span className="error-text">{errors.email}</span>
            )}
          </div>

          {/* PASSWORD */}
          <div className={`input-group ${errors.password ? "error" : ""}`}>
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>

          {/* CONFIRM PASSWORD */}
          <div
            className={`input-group ${errors.confirmPassword ? "error" : ""}`}
          >
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
            />
            {errors.confirmPassword && (
              <span className="error-text">{errors.confirmPassword}</span>
            )}
          </div>

          <button className={`register-btn ${loading ? "loading" : ""}`}>
            {loading ? "CREATING..." : "REGISTER"}
          </button>
        </form>

        <p className="register-footer">
          Already have an account? <span>Login</span>
        </p>
      </div>
    </section>
  );
};

export default Register;
