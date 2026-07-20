import "./Signup.css";

import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import AuthLayout from "../../../layouts/AuthLayout";

import Input from "../../../components/Common/Form/Input";
import PasswordInput from "../../../components/Common/Form/PasswordInput";
import Select from "../../../components/Common/Form/Select";
import Button from "../../../components/common/Form/Button";
import PasswordStrength from "../../../components/common/Form/PasswordStrength";

import { signup as signupService } from "../../../services/api/authService";

import { signupSchema } from "../../../validations/auth/signupSchema";




function Signup() {
  const [error, setError] = useState("");

  const {

    register,
    handleSubmit,
    watch,
    formState: { errors }

  } = useForm({

    resolver: zodResolver(signupSchema),

    defaultValues: {

      role: "student",

      terms: false

    }

  });


  const navigate = useNavigate();

  const onSubmit = async (data) => {

    setError("")

    try {

      await signupService(data);

      navigate("/verify-signup-otp", {

        state: {

          email: data.email

        }

      });

    }

    catch (err) {

      setError(

        err.response?.data?.message ||

        "Sign up failed"

      );

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

            label="First Name"

            placeholder="Enter First Name"

            {...register("firstName")}

            error={errors.firstName?.message}

          />


          <Input

            label="Last Name"

            placeholder="Enter Last Name"

            {...register("lastName")}

            error={errors.lastName?.message}

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

          <Select

            label="Role"

            options={[

              {
                value: "student",
                label: "Student"
              },

              {
                value: "employer",
                label: "Employer"
              }

            ]}


            {...register("role")}

            error={errors.role?.message}

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

          // eslint-disable-next-line react-hooks/incompatible-library
          <PasswordStrength password={watch("password")} />

          {

            error &&

            <p className="signup-error">

              {error}

            </p>


          }

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