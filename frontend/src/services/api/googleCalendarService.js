import api from "../api";

const BASE_URL = "/integrations/google-calendar";

export const connectGoogleCalendar = async () => {

    const { data } = await api.get(

        `${BASE_URL}/connect`

    );

    return data;

};

export const disconnectGoogleCalendar = async () => {

    const { data } = await api.delete(

        `${BASE_URL}/disconnect`

    );

    return data;

};

export const getGoogleCalendar = async () => {

    const { data } = await api.get(

        BASE_URL

    );

    return data;

};

export const refreshGoogleCalendar = async () => {

    const { data } = await api.post(

        `${BASE_URL}/refresh`

    );

    return data;

};

export const saveGoogleCalendarSettings = async (

    payload

) => {

    const { data } = await api.put(

        `${BASE_URL}/settings`,

        payload

    );

    return data;

};

export const getGoogleCalendarHistory = async () => {

    const { data } = await api.get(

        `${BASE_URL}/history`

    );

    return data;

};