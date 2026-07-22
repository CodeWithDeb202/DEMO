import "./OAuthButton.css";

import {

    FaLink,
    FaUnlink,
    FaSpinner

} from "react-icons/fa";

function OAuthButton({

    connected = false,

    loading = false,

    provider = "OAuth",

    icon = null,

    connectText = "Connect",

    disconnectText = "Disconnect",

    onConnect,

    onDisconnect,

    disabled = false

}) {

    const handleClick = () => {

        if (loading || disabled) return;

        if (connected) {

            onDisconnect?.();

        }

        else {

            onConnect?.();

        }

    };

    return (

        <button

            className={`oauth-button ${connected ? "connected" : ""}`}

            onClick={handleClick}

            disabled={loading || disabled}

        >

            {

                loading

                ?

                <FaSpinner className="spin" />

                :

                icon

            }

            <span>

                {

                    connected

                    ?

                    disconnectText

                    :

                    connectText

                }

            </span>

            <small>

                {provider}

            </small>

            {

                connected

                ?

                <FaUnlink />

                :

                <FaLink />

            }

        </button>

    );

}

export default OAuthButton;