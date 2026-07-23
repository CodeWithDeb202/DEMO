import "./IntegrationSettingsForm.css";

import FormInput from "./fields/FormInput";
import FormSelect from "./fields/FormSelect";
import FormSwitch from "./fields/FormSwitch";
import FormCheckbox from "./fields/FormCheckbox";
import FormTextarea from "./fields/FormTextarea";
import FormNumber from "./fields/FormNumber";
import FormPassword from "./fields/FormPassword";

function IntegrationSettingsForm({

    fields = [],

    values = {},

    errors = {},

    onChange,

    onSubmit,

    submitText = "Save Settings",

    loading = false

}) {

    const renderField = (field) => {

        const commonProps = {

            ...field,

            value: values[field.name],

            checked: values[field.name],

            error: errors[field.name],

            onChange

        };

        switch (field.type) {

            case "text":

            case "email":

            case "url":

                return (

                    <FormInput

                        key={field.name}

                        type={field.type}

                        {...commonProps}

                    />

                );

            case "password":

                return (

                    <FormPassword

                        key={field.name}

                        {...commonProps}

                    />

                );

            case "number":

                return (

                    <FormNumber

                        key={field.name}

                        {...commonProps}

                    />

                );

            case "textarea":

                return (

                    <FormTextarea

                        key={field.name}

                        {...commonProps}

                    />

                );

            case "select":

                return (

                    <FormSelect

                        key={field.name}

                        {...commonProps}

                    />

                );

            case "switch":

                return (

                    <FormSwitch

                        key={field.name}

                        {...commonProps}

                    />

                );

            case "checkbox":

                return (

                    <FormCheckbox

                        key={field.name}

                        {...commonProps}

                    />

                );

            default:

                return null;

        }

    };

    const handleSubmit = (event) => {

        event.preventDefault();

        onSubmit?.();

    };

    return (

        <form

            className="integration-settings-form"

            onSubmit={handleSubmit}

        >

            <div className="settings-grid">

                {

                    fields.map(renderField)

                }

            </div>

            <div className="settings-footer">

                <button

                    type="submit"

                    disabled={loading}

                    className="save-btn"

                >

                    {

                        loading

                        ?

                        "Saving..."

                        :

                        submitText

                    }

                </button>

            </div>

        </form>

    );

}

export default IntegrationSettingsForm;