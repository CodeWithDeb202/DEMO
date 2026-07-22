// ==========================================
// Zoom Integration Constants
// ==========================================

// Connection Status
export const ZOOM_STATUS = {

    CONNECTED: "CONNECTED",

    DISCONNECTED: "DISCONNECTED",

    CONNECTING: "CONNECTING",

    FAILED: "FAILED"

};

// OAuth State
export const OAUTH_STATE = {

    IDLE: "IDLE",

    LOADING: "LOADING",

    SUCCESS: "SUCCESS",

    ERROR: "ERROR"

};

// Default Meeting Duration
export const DEFAULT_DURATION = 30;

// Duration Options
export const DURATION_OPTIONS = [

    {
        label: "15 Minutes",
        value: 15
    },

    {
        label: "30 Minutes",
        value: 30
    },

    {
        label: "45 Minutes",
        value: 45
    },

    {
        label: "60 Minutes",
        value: 60
    },

    {
        label: "90 Minutes",
        value: 90
    },

    {
        label: "120 Minutes",
        value: 120
    }

];

// Sync Mode

export const SYNC_MODE = {

    ATS_TO_ZOOM: "ATS_TO_ZOOM",

    ZOOM_TO_ATS: "ZOOM_TO_ATS",

    BOTH: "BOTH"

};

// Meeting Visibility

export const MEETING_VISIBILITY = {

    PRIVATE: "PRIVATE",

    PUBLIC: "PUBLIC"

};

// Host Video

export const HOST_VIDEO = {

    ENABLED: true,

    DISABLED: false

};

// Participant Video

export const PARTICIPANT_VIDEO = {

    ENABLED: true,

    DISABLED: false

};

// Waiting Room

export const WAITING_ROOM = {

    ENABLED: true,

    DISABLED: false

};

// Join Before Host

export const JOIN_BEFORE_HOST = {

    ENABLED: true,

    DISABLED: false

};

// Cloud Recording

export const CLOUD_RECORDING = {

    ENABLED: true,

    DISABLED: false

};

// Audio Type

export const AUDIO_OPTIONS = [

    {

        label: "Both",

        value: "both"

    },

    {

        label: "VoIP",

        value: "voip"

    },

    {

        label: "Telephone",

        value: "telephony"

    }

];

// Authentication Types

export const AUTH_OPTIONS = [

    {

        label: "No Authentication",

        value: "none"

    },

    {

        label: "Zoom Login Required",

        value: "zoom"

    },

    {

        label: "Company Account Only",

        value: "company"

    }

];

// Meeting Types

export const MEETING_TYPES = [

    {

        label: "Instant Meeting",

        value: "instant"

    },

    {

        label: "Scheduled Meeting",

        value: "scheduled"

    },

    {

        label: "Recurring Meeting",

        value: "recurring"

    }

];

// Default Settings

export const DEFAULT_SETTINGS = {

    duration: 30,

    waitingRoom: true,

    hostVideo: true,

    participantVideo: true,

    joinBeforeHost: false,

    cloudRecording: false,

    autoCreateMeeting: true,

    syncMode: SYNC_MODE.BOTH,

    audio: "both",

    authentication: "none",

    meetingType: "scheduled"

};