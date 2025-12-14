import React, { useState } from "react";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation(); // Add translation hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", formData);
      navigate("/login"); // Redirect to login
    } catch (err) {
      setError(err.response?.data?.message || t("signupError"));
    }
  };

  return (
    <div className="auth-form-container">
      <form onSubmit={handleSubmit}>
        <h2>{t("signupTitle")}</h2>
        <input
          name="name"
          placeholder={t("signupName")}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder={t("signupEmail")}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder={t("signupPassword")}
          onChange={handleChange}
          required
        />
        <button type="submit">{t("signupButton")}</button>

        {error && <p className="auth-error">{error}</p>}

        <p className="auth-footer">
          {t("signupFooter")} <Link to="/login">{t("signupSignIn")}</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
