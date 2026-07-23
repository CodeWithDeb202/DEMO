import api from "../api";

const BASE_URL = "/integrations/microsoft-teams";

export const connectMicrosoftTeams = async () => {

    const { data } = await api.get(

        `${BASE_URL}/connect`

    );

    return data;

};

export const disconnectMicrosoftTeams = async () => {

    const { data } = await api.delete(

        `${BASE_URL}/disconnect`

    );

    return data;

};

export const getMicrosoftTeams = async () => {

    const { data } = await api.get(

        BASE_URL

    );

    return data;

};

export const refreshMicrosoftTeams = async () => {

    const { data } = await api.post(

        `${BASE_URL}/refresh`

    );

    return data;

};

export const saveMicrosoftTeamsSettings = async (

    payload

) => {

    const { data } = await api.put(

        `${BASE_URL}/settings`,

        payload

    );

    return data;

};

export const getMicrosoftTeamsHistory = async () => {

    const { data } = await api.get(

        `${BASE_URL}/history`

    );

    return data;

};

export const getMicrosoftTeamsMeetings = async () => {

    const { data } = await api.get(

        `${BASE_URL}/meetings`

    );

    return data;

};

export const createMicrosoftTeamsMeeting = async (

    payload

) => {

    const { data } = await api.post(

        `${BASE_URL}/meetings`,

        payload

    );

    return data;

};

export const updateMicrosoftTeamsMeeting = async (

    meetingId,

    payload

) => {

    const { data } = await api.put(

        `${BASE_URL}/meetings/${meetingId}`,

        payload

    );

    return data;

};

export const deleteMicrosoftTeamsMeeting = async (

    meetingId

) => {

    const { data } = await api.delete(

        `${BASE_URL}/meetings/${meetingId}`

    );

    return data;

};