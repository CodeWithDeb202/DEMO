import "./CreateInternship.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import BasicDetails from "../../components/Employer/Internship/BasicDetails";
import SalarySection from "../../components/Employer/Internship/SalarySection";
import LocationSection from "../../components/Employer/Internship/LocationSection";
import SkillsSection from "../../components/Employer/Internship/SkillsSection";
import ResponsibilitiesSection from "../../components/Employer/Internship/ResponsibilitiesSection";
import RequirementsSection from "../../components/Employer/Internship/RequirementsSection";
import BenefitsSection from "../../components/Employer/Internship/BenefitsSection";
import SettingsSection from "../../components/Employer/Internship/SettingsSection";
import PreviewCard from "../../components/Employer/Internship/PreviewCard";
import PublishActions from "../../components/Employer/Internship/PublishActions";

import { createInternshipSchema } from "../../validations/createInternshipSchema";
import { createInternship } from "../../services/api/internshipService";

const CreateInternship = () => {

    const navigate = useNavigate();

    const [preview, setPreview] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(createInternshipSchema),
        defaultValues: {
            title: "",
            category: "",
            internshipType: "",
            workMode: "",
            duration: "",
            openings: 1,
            experience: "Fresher",
            deadline: "",
            country: "India",
            state: "",
            city: "",
            pinCode: "",
            address: "",
            mapUrl: "",
            isPaid: "true",
            stipend: "",
            currency: "INR",
            salaryType: "Per Month",
            performanceBonus: "",
            joiningBonus: "",
            perks: "",
            skills: [],
            responsibilities: [],
            requirements: [],
            benefits: [],
            visibility: "Public",
            status: "Draft",
            featured: false,
            allowRemote: false,
            autoShortlist: false,
            emailNotification: true,
            certificate: true,
            ppo: false
        }
    });

    const onSubmit = async (data) => {

        try {

            await createInternship(data);

            toast.success("Internship created successfully");

            navigate("/employer/internships");

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Failed to create internship"
            );

        }

    };

    return (

        <form
            className="create-internship"
            onSubmit={handleSubmit(onSubmit)}
        >

            <BasicDetails
                register={register}
                errors={errors}
            />

            <SalarySection
                register={register}
                watch={watch}
                errors={errors}
            />

            <LocationSection
                register={register}
                watch={watch}
                errors={errors}
            />

            <SkillsSection
                register={register}
                watch={watch}
                setValue={setValue}
                errors={errors}
            />

            <ResponsibilitiesSection
                register={register}
                watch={watch}
                setValue={setValue}
                errors={errors}
            />

            <RequirementsSection
                register={register}
                watch={watch}
                setValue={setValue}
                errors={errors}
            />

            <BenefitsSection
                register={register}
                watch={watch}
                setValue={setValue}
                errors={errors}
            />

            <SettingsSection
                register={register}
            />

            {preview && (
                <PreviewCard
                    watch={watch}
                />
            )}

            <PublishActions
                isSubmitting={isSubmitting}
                onPreview={() => setPreview(!preview)}
                onCancel={() => navigate(-1)}
            />

        </form>

    );

};

export default CreateInternship;