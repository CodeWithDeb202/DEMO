const errorMiddleware = (

    err,

    req,

    res,

    next

) => {

    let statusCode = err.statusCode || 500;

    let message = err.message || "Internal Server Error";

    if (err.name === "CastError") {

        statusCode = 400;

        message = "Invalid ID";

    }

    if (err.code === 11000) {

        statusCode = 409;

        message = "Duplicate field value";

    }

    if (err.name === "ValidationError") {

        statusCode = 400;

        message = Object.values(err.errors)

            .map(

                (item) => item.message

            )

            .join(", ");

    }

    if (err.name === "JsonWebTokenError") {

        statusCode = 401;

        message = "Invalid Token";

    }

    if (err.name === "TokenExpiredError") {

        statusCode = 401;

        message = "Token Expired";

    }

    return res.status(statusCode).json({

        success: false,

        message,

        stack:

            process.env.NODE_ENV === "development"

                ? err.stack

                : undefined

    });

};

export default errorMiddleware;