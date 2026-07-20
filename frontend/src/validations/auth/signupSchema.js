import { z } from "zod";


export const signupSchema = z
    .object({

        firstName: z
            .string()
            .trim()
            .min(2, "First name must be at least 2 characters")
            .max(30, "First name too long"),


        lastName: z
            .string()
            .trim()
            .min(2, "Last name must be at least 2 characters")
            .max(30, "Last name too long"),



        email: z
            .string()
            .trim()
            .email("Please enter a valid email"),



        phone: z
            .string()
            .regex(
                /^[6-9]\d{9}$/,
                "Please enter a valid 10-digit mobile number"
            ),



        college: z
            .string()
            .trim()
            .min(3, "College name is required"),



        branch: z
            .string()
            .trim()
            .min(2, "Branch is required"),



        year: z
            .string()
            .min(1, "Please select your year"),



        role: z
            .enum(
                [
                    "student",
                    "employer"
                ],
                {
                    message: "Please select role"
                }
            ),



        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(
                /[A-Z]/,
                "At least one uppercase letter"
            )
            .regex(
                /[a-z]/,
                "At least one lowercase letter"
            )
            .regex(
                /[0-9]/,
                "At least one number"
            )
            .regex(
                /[^A-Za-z0-9]/,
                "At least one special character"
            ),



        confirmPassword: z
            .string(),



        terms: z
            .boolean()
            .refine(
                value => value === true,
                {
                    message: "Please accept Terms & Conditions"
                }
            )

    })

    .refine(

        (data) => data.password === data.confirmPassword,

        {

            path: ["confirmPassword"],

            message: "Passwords do not match"

        }

    );