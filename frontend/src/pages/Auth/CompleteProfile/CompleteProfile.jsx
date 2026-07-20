import "./CompleteProfile.css";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import WelcomeCard from "../../../components/Dashboard/WelcomeCard";
import ProfileProgress from "../../../components/Dashboard/ProfileProgress";

import BasicInfoSection from "../../../components/Common/Profile/BasicInfo";
import EducationSection from "../../../components/Common/Profile/EducationSection";
import ExperienceSection from "../../../components/Common/Profile/ExperienceSection";
import SkillsSection from "../../../components/Common/Profile/SkillsSection";
import SocialLinksSection from "../../../components/Common/Profile/SocialLinksSection";
import ResumeUpload from "../../../components/Common/Profile/ResumeUpload";
import AvatarUpload from "../../../components/Common/Profile/AvatarUpload";

import profileSchema from "../../../validations/auth/profileSchema";

import { getProfile, updateProfile } from "../../../services/api/profileService";

import toast from "react-hot-toast";

const CompleteProfile = () => {

    const [user, setUser] = useState({});

    const {

        register,
        control,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: {
            errors,
            isSubmitting
        }

    } = useForm({

        resolver: zodResolver(profileSchema),

        defaultValues: {

            education: [],

            experience: [],

            skills: [],

            languages: [],

            preferredTechnologies: [],

            socialLinks: {}

        }

    });

    useEffect(() => {

        // eslint-disable-next-line react-hooks/immutability
        fetchProfile();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchProfile = async () => {

        try {

            const res = await getProfile();

            setUser(res.user);

            reset(res.user);

        }

        catch (error) {

            console.log(error);

            toast.error("Failed to load profile");

        }

    };

    const onSubmit = async (data) => {

        try {

            await updateProfile(data);

            toast.success("Profile updated successfully");

        }

        catch (error) {

            console.log(error);

            toast.error("Profile update failed");

        }

    };

    return (

        <div className="complete-profile-page">

            <WelcomeCard
                user={user}
                completion={user?.profileCompletion || 0}
            />

            <ProfileProgress

                user={user}

            />

            <form onSubmit={handleSubmit(onSubmit)}>

                <AvatarUpload

                    watch={watch}

                    setValue={setValue}

                />

                <BasicInfoSection
                    control={control}
                    register={register}
                    errors={errors}
                />

                <EducationSection

                    control={control}

                    register={register}

                    errors={errors}

                />

                <ExperienceSection

                    control={control}

                    register={register}

                />

                <SkillsSection

                    control={control}

                    register={register}

                    watch={watch}

                    setValue={setValue}

                />

                <SocialLinksSection

                    register={register}

                    errors={errors}

                />

                <ResumeUpload

                    watch={watch}

                    setValue={setValue}

                />

                <button

                    className="save-btn"

                    disabled={isSubmitting}

                >

                    {

                        isSubmitting

                            ?

                            "Saving..."

                            :

                            "Save Profile"

                    }

                </button>

            </form>

        </div>

    );

};

export default CompleteProfile;