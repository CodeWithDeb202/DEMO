import api from "../api";

const BASE_URL = "/integrations/outlook-calendar";

export const connectOutlookCalendar = async () => {

    const { data } = await api.get(

        `${BASE_URL}/connect`

    );

    return data;

};

export const disconnectOutlookCalendar = async () => {

    const { data } = await api.delete(

        `${BASE_URL}/disconnect`

    );

    return data;

};

export const getOutlookCalendar = async () => {

    const { data } = await api.get(

        BASE_URL

    );

    return data;

};

export const refreshOutlookCalendar = async () => {

    const { data } = await api.post(

        `${BASE_URL}/refresh`

    );

    return data;

};

export const saveOutlookCalendarSettings = async (

    payload

) => {

    const { data } = await api.put(

        `${BASE_URL}/settings`,

        payload

    );

    return data;

};

export const getOutlookCalendarHistory = async () => {

    const { data } = await api.get(

        `${BASE_URL}/history`

    );

    return data;

};

export const getOutlookCalendarEvents = async () => {

    const { data } = await api.get(

        `${BASE_URL}/events`

    );

    return data;

};

export const createOutlookCalendarEvent = async (

    payload

) => {

    const { data } = await api.post(

        `${BASE_URL}/events`,

        payload

    );

    return data;

};

export const updateOutlookCalendarEvent = async (

    eventId,

    payload

) => {

    const { data } = await api.put(

        `${BASE_URL}/events/${eventId}`,

        payload

    );

    return data;

};

export const deleteOutlookCalendarEvent = async (

    eventId

) => {

    const { data } = await api.delete(

        `${BASE_URL}/events/${eventId}`

    );

    return data;

};