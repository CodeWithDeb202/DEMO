import { useState, useEffect, useCallback } from "react";
import {
  getMyProfile,
  completeProfile,
} from "../services/api/profileService";

const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // ===============================
  // Fetch Logged In User Profile
  // ===============================
  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const res = await getMyProfile();

      if (res?.success) {
        setProfile(res.user);
      }
    } catch (err) {
      console.error(err);

      setError(
        err?.response?.data?.message ||
          "Failed to load profile."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // ===============================
  // Update Complete Profile
  // ===============================
  const updateProfile = async (formData) => {
    try {
      setSaving(true);
      setError("");

      const res = await completeProfile(formData);

      if (res?.success) {
        setProfile(res.user);

        return {
          success: true,
          message: res.message,
          user: res.user,
        };
      }

      return {
        success: false,
      };
    } catch (err) {
      console.error(err);

      const message =
        err?.response?.data?.message ||
        "Profile update failed.";

      setError(message);

      return {
        success: false,
        message,
      };
    } finally {
      setSaving(false);
    }
  };

  // ===============================
  // Refresh Profile
  // ===============================
  const refreshProfile = async () => {
    await fetchProfile();
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProfile();
  }, [fetchProfile]);

  return {
    profile,
    loading,
    saving,
    error,

    setProfile,

    fetchProfile,
    refreshProfile,
    updateProfile,
  };
};

export default useProfile;