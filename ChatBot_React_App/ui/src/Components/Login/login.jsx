import "./login.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // =========================
  // VALIDATION
  // =========================
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) newErrors.email = "Email address is required";
    else if (!emailRegex.test(email))
      newErrors.email = "Please enter a valid email address";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

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
      await new Promise((res) => setTimeout(res, 2000));
      setSuccess(true);
    } catch {
      setErrors({ password: "Authentication failed. Try again." });
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // SUCCESS VIEW
  // =========================
  if (success) {
    return (
      <section className="login success-view">
        <h1>LOGIN SUCCESSFUL</h1>
        <p>Redirecting to dashboard...</p>
      </section>
    );
  }

  // =========================
  // LOGIN FORM
  // =========================
  return (
    <section className="login">
      <div className="login-card">
        <h1 className="login-title">WELCOME BACK</h1>
        <p className="login-subtitle">
          Access the Electric Xtra control panel
        </p>

        <form onSubmit={handleSubmit}>
          {/* EMAIL */}
          <div className={`input-group ${errors.email ? "error" : ""}`}>
            <label>Email</label>
            <input
              type="email"
              placeholder="you@electricxtra.tech"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({});
              }}
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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors({});
                }}
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

          <button
            className={`login-btn ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? "AUTHENTICATING..." : "LOGIN"}
          </button>
        </form>

        <p className="login-footer">
          Don’t have an account? <span>Click Here</span>
        </p>
      </div>
    </section>
  );
};

export default Login;
