import apiClient from "../../../../services/api/apiClient";

// ==========================================
// Get Zoom Integration Details
// ==========================================

export const getZoomIntegration = async () => {

    const response = await apiClient.get(
        "/integrations/zoom"
    );

    return response.data;

};

// ==========================================
// Connect Zoom OAuth
// ==========================================

export const connectZoom = async () => {

    const response = await apiClient.post(
        "/integrations/zoom/connect"
    );

    return response.data;

};

// ==========================================
// Disconnect Zoom
// ==========================================

export const disconnectZoom = async () => {

    const response = await apiClient.post(
        "/integrations/zoom/disconnect"
    );

    return response.data;

};

// ==========================================
// Update Zoom Settings
// ==========================================

export const updateZoomSettings = async (
    payload
) => {

    const response = await apiClient.put(
        "/integrations/zoom/settings",
        payload
    );

    return response.data;

};

// ==========================================
// Test Zoom Connection
// ==========================================

export const testZoomConnection = async () => {

    const response = await apiClient.post(
        "/integrations/zoom/test"
    );

    return response.data;

};

// ==========================================
// Meeting History
// ==========================================

export const getMeetingHistory = async (

    page = 1,

    limit = 10

) => {

    const response = await apiClient.get(

        "/integrations/zoom/history",

        {

            params: {

                page,

                limit

            }

        }

    );

    return response.data;

};

// ==========================================
// Create Zoom Meeting
// ==========================================

export const createMeeting = async (

    payload

) => {

    const response = await apiClient.post(

        "/integrations/zoom/meetings",

        payload

    );

    return response.data;

};

// ==========================================
// Update Meeting
// ==========================================

export const updateMeeting = async (

    meetingId,

    payload

) => {

    const response = await apiClient.put(

        `/integrations/zoom/meetings/${meetingId}`,

        payload

    );

    return response.data;

};

// ==========================================
// Delete Meeting
// ==========================================

export const deleteMeeting = async (

    meetingId

) => {

    const response = await apiClient.delete(

        `/integrations/zoom/meetings/${meetingId}`

    );

    return response.data;

};

// ==========================================
// Meeting Details
// ==========================================

export const getMeetingDetails = async (

    meetingId

) => {

    const response = await apiClient.get(

        `/integrations/zoom/meetings/${meetingId}`

    );

    return response.data;

};