import api from "./api";

/*
=========================================
PROFILE API SERVICE
=========================================
GET    /profile
PUT    /profile
POST   /profile/avatar
POST   /profile/resume
DELETE /profile/avatar
DELETE /profile/resume
=========================================
*/


// ================================
// Get Logged In User Profile
// ================================

export const getProfile = async () => {

    const { data } = await api.get("/profile");

    return data;

};


export const completeProfile = async (formData) => {
  const { data } = await api.put(
    "/users/complete-profile",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};


// ================================
// Update Profile
// ================================

export const updateProfile = async (profileData) => {

    const { data } = await api.put(

        "/profile",

        profileData

    );

    return data;

};


// ================================
// Upload Avatar
// ================================

export const uploadAvatar = async (file) => {

    const formData = new FormData();

    formData.append(

        "avatar",

        file

    );

    const { data } = await api.post(

        "/profile/avatar",

        formData,

        {

            headers: {

                "Content-Type":

                    "multipart/form-data"

            }

        }

    );

    return data;

};


// ================================
// Delete Avatar
// ================================

export const deleteAvatar = async () => {

    const { data } = await api.delete(

        "/profile/avatar"

    );

    return data;

};


// ================================
// Upload Resume
// ================================

export const uploadResume = async (file) => {

    const formData = new FormData();

    formData.append(

        "resume",

        file

    );

    const { data } = await api.post(

        "/profile/resume",

        formData,

        {

            headers: {

                "Content-Type":

                    "multipart/form-data"

            }

        }

    );

    return data;

};


// ================================
// Delete Resume
// ================================

export const deleteResume = async () => {

    const { data } = await api.delete(

        "/profile/resume"

    );

    return data;

};



// ================================
// Complete Profile Percentage
// ================================

export const getProfileProgress = async () => {

    const { data } = await api.get(

        "/profile/progress"

    );

    return data;

};



// ================================
// Public Profile
// ================================

export const getPublicProfile = async (userId) => {

    const { data } = await api.get(

        `/profile/public/${userId}`

    );

    return data;

};



// ================================
// Search Users
// ================================

export const searchUsers = async (

    keyword,

    page = 1

) => {

    const { data } = await api.get(

        `/profile/search?keyword=${keyword}&page=${page}`

    );

    return data;

};



// ================================
// Suggested Users
// ================================

export const getSuggestedUsers = async () => {

    const { data } = await api.get(

        "/profile/suggestions"

    );

    return data;

};