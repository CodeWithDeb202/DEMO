import api from "../api";

const BASE_URL = "/integrations/google-meet";

export const connectGoogleMeet = async () => {

    const { data } = await api.get(

        `${BASE_URL}/connect`

    );

    return data;

};

export const disconnectGoogleMeet = async () => {

    const { data } = await api.delete(

        `${BASE_URL}/disconnect`

    );

    return data;

};

export const getGoogleMeet = async () => {

    const { data } = await api.get(

        BASE_URL

    );

    return data;

};

export const refreshGoogleMeet = async () => {

    const { data } = await api.post(

        `${BASE_URL}/refresh`

    );

    return data;

};

export const saveGoogleMeetSettings = async (

    payload

) => {

    const { data } = await api.put(

        `${BASE_URL}/settings`,

        payload

    );

    return data;

};

export const getGoogleMeetHistory = async () => {

    const { data } = await api.get(

        `${BASE_URL}/history`

    );

    return data;

};

export const createGoogleMeetMeeting = async (

    payload

) => {

    const { data } = await api.post(

        `${BASE_URL}/meetings`,

        payload

    );

    return data;

};

export const updateGoogleMeetMeeting = async (

    meetingId,

    payload

) => {

    const { data } = await api.put(

        `${BASE_URL}/meetings/${meetingId}`,

        payload

    );

    return data;

};

export const deleteGoogleMeetMeeting = async (

    meetingId

) => {

    const { data } = await api.delete(

        `${BASE_URL}/meetings/${meetingId}`

    );

    return data;

};

export const getGoogleMeetMeetings = async () => {

    const { data } = await api.get(

        `${BASE_URL}/meetings`

    );

    return data;

};