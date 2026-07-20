import "./PublishActions.css";

const PublishActions = ({

    isSubmitting,

    onPreview,

    onCancel

}) => {

    return (

        <div className="publish-actions">

            <button
                type="button"
                className="btn btn-outline"
                onClick={onCancel}
                disabled={isSubmitting}
            >
                Cancel
            </button>

            <button
                type="button"
                className="btn btn-secondary"
                onClick={onPreview}
                disabled={isSubmitting}
            >
                Preview
            </button>

            <button
                type="submit"
                name="status"
                value="Draft"
                className="btn btn-warning"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Saving..." : "Save Draft"}
            </button>

            <button
                type="submit"
                name="status"
                value="Published"
                className="btn btn-primary"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Publishing..." : "Publish Internship"}
            </button>

        </div>

    );

};

export default PublishActions;