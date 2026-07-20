import axiosInstance from "./axios";

export const createInternship = async (data) => {

    const response = await axiosInstance.post(
        "/internships",
        data
    );

    return response.data;

};

export const getMyInternships = async (params = {}) => {

    const response = await axiosInstance.get(
        "/internships/my",
        {
            params
        }
    );

    return response.data;

};

export const getInternshipById = async (id) => {

    const response = await axiosInstance.get(
        `/internships/${id}`
    );

    return response.data;

};

export const updateInternship = async (id, data) => {

    const response = await axiosInstance.put(
        `/internships/${id}`,
        data
    );

    return response.data;

};

export const deleteInternship = async (id) => {

    const response = await axiosInstance.delete(
        `/internships/${id}`
    );

    return response.data;

};

export const publishInternship = async (id) => {

    const response = await axiosInstance.patch(
        `/internships/${id}/publish`
    );

    return response.data;

};

export const closeInternship = async (id) => {

    const response = await axiosInstance.patch(
        `/internships/${id}/close`
    );

    return response.data;

};

export const reopenInternship = async (id) => {

    const response = await axiosInstance.patch(
        `/internships/${id}/reopen`
    );

    return response.data;

};

export const duplicateInternship = async (id) => {

    const response = await axiosInstance.post(
        `/internships/${id}/duplicate`
    );

    return response.data;

};

export const getInternshipApplicants = async (id, params = {}) => {

    const response = await axiosInstance.get(
        `/internships/${id}/applicants`,
        {
            params
        }
    );

    return response.data;

};

export const shortlistApplicant = async (id, applicationId) => {

    const response = await axiosInstance.patch(
        `/internships/${id}/applications/${applicationId}/shortlist`
    );

    return response.data;

};

export const rejectApplicant = async (id, applicationId) => {

    const response = await axiosInstance.patch(
        `/internships/${id}/applications/${applicationId}/reject`
    );

    return response.data;

};

export const hireApplicant = async (id, applicationId) => {

    const response = await axiosInstance.patch(
        `/internships/${id}/applications/${applicationId}/hire`
    );

    return response.data;

};

export const scheduleInterview = async (id, data) => {

    const response = await axiosInstance.post(
        `/internships/${id}/interview`,
        data
    );

    return response.data;

};