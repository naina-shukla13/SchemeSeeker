import React, { useState } from "react";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/auth/login", formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      if (response.data.user.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || t("loginError"));
    }
  };

  return (
    <div className="auth-form-container">
      <form onSubmit={handleSubmit}>
        <h2>{t("loginTitle")}</h2>
        <input
          name="email"
          type="email"
          placeholder={t("loginEmail")}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder={t("loginPassword")}
          onChange={handleChange}
          required
        />
        <button type="submit">{t("loginButton")}</button>
        {error && <p className="auth-error">{error}</p>}
        <p className="auth-footer">
          {t("loginFooter")} <Link to="/signup">{t("loginSignUp")}</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
