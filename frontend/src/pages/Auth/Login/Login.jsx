import "./Login.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import AuthLayout from "../../../layouts/AuthLayout/AuthLayout";

import Input from "../../../components/common/Input/Input";
import PasswordInput from "../../../components/common/PasswordInput/PasswordInput";
import Button from "../../../components/common/Button/Button";

import { FaEnvelope } from "react-icons/fa";

import { login as loginService } from "../../../services/api/authService";
import { useAuth } from "../../../context/Auth";

function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({

    email: "",
    password: ""

  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({

      ...prev,

      [name]: value

    }));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {

      return setError("Please fill all fields.");

    }

    try {

      setLoading(true);

      const response = await loginService(formData);

      login(response.data.user);

      navigate("/dashboard");

    }

    catch (err) {

      setError( err.response?.data?.message || "Login failed." );

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <AuthLayout

      title="Welcome Back"

      subtitle="Login to continue your internship journey."

    >

      <motion.form

        className="login-form"

        onSubmit={handleSubmit}

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

      >

        <Input

          label="Email"

          type="email"

          name="email"

          placeholder="Enter your email"

          value={formData.email}

          onChange={handleChange}

          icon={<FaEnvelope />}

          required

        />

        <PasswordInput

          label="Password"

          name="password"

          value={formData.password}

          onChange={handleChange}

          placeholder="Enter your password"

          required

        />

        {error && (

          <p className="login-error">

            {error}

          </p>

        )}

        <div className="login-options">

          <label className="remember-me">

            <input

              type="checkbox"

              checked={rememberMe}

              onChange={() =>

                setRememberMe(!rememberMe)

              }

            />

            Remember Me

          </label>

          <Link

            to="/forgot-password"

            className="forgot-link"

          >

            Forgot Password?

          </Link>

        </div>

        <Button

          type="submit"

          fullWidth

          disabled={loading}

        >

          {

            loading

              ? "Logging In..."

              : "Login"

          }

        </Button>

        <p className="signup-text">

          Don't have an account?

          <Link to="/signup">

            Create Account

          </Link>

        </p>

      </motion.form>

    </AuthLayout>

  );

}

export default Login;