import "./Signup.css";

import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import AuthLayout from "../../../layouts/AuthLayout/AuthLayout";

import Input from "../../../components/Common/Input/Input";

import PasswordInput from "../../../components/Common/PasswordInput/PasswordInput";

import Select from "../../../components/Common/Select/Select";

import Button from "../../../components/common/Button/Button";

import { signupSchema } from "../../../validations/auth/signupSchema";

import { signup } from "../../../services/api/authService";



function Signup() {
  const {

    register,

    handleSubmit,

    formState: { errors }

  } = useForm({

    resolver: zodResolver(signupSchema)

  })


  const navigate = useNavigate();

  const onSubmit = async (data) => {

    try {

      await signup(data);

      navigate("/verify-otp");

    }

    catch (err) {

      console.log(err);

    }

  }

  return (
    <>
      <AuthLayout

        title="Create Account"

        subtitle="Join Tech Monster Pvt. Ltd."

      >

        <motion.form
          className="signup-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Full Name"
            placeholder="Enter Full Name"
            {
            ...register("fullName")
            }
            error={errors.fullName?.message}
          />

          <Input
            label="Email"
            type="email"
            {
            ...register("email")
            }
            error={errors.email?.message}
          />

          <Input

            label="Phone"

            {

            ...register("phone")

            }

            error={errors.phone?.message}

          />

          <Input

            label="College"

            {

            ...register("college")

            }

            error={errors.college?.message}

          />

          <Input

            label="Branch"

            {

            ...register("branch")

            }

            error={errors.branch?.message}

          />

          <Select

            label="Year"

            options={[

              {

                value: "1st",

                label: "1st Year"

              },

              {

                value: "2nd",

                label: "2nd Year"

              },

              {

                value: "3rd",

                label: "3rd Year"

              },

              {

                value: "4th",

                label: "4th Year"

              }

            ]}

            {

            ...register("year")

            }

            error={errors.year?.message}

          />

          <PasswordInput

            label="Password"

            showStrength

            {

            ...register("password")

            }

            error={errors.password?.message}

          />

          <PasswordInput

            label="Confirm Password"

            {

            ...register("confirmPassword")

            }

            error={errors.confirmPassword?.message}

          />

          <label className="terms">

            <input

              type="checkbox"

              {

              ...register("terms")

              }

            />

            I accept Terms & Conditions

          </label>

          <p>

            {errors.terms?.message}

          </p>

          <Button

            type="submit"

            fullWidth

          >

            Create Account

          </Button>

          <p>

            Already have an account?

            <Link to="/login">

              Login

            </Link>

          </p>
        </motion.form>

      </AuthLayout>
    </>
  )

}

export default Signup;