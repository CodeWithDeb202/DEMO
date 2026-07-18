import winston from "winston";

const {

    combine,

    timestamp,

    printf,

    colorize,

    errors

} = winston.format;

// ==========================================================
// Console Format
// ==========================================================

const consoleFormat = printf(

    ({ level, message, timestamp, stack }) => {

        return `[${timestamp}] ${level}: ${stack || message}`;

    }

);

// ==========================================================
// Logger
// ==========================================================

const logger = winston.createLogger({

    level: "info",

    format: combine(

        errors({

            stack: true

        }),

        timestamp({

            format: "YYYY-MM-DD HH:mm:ss"

        })

    ),

    transports: [

        // ==================================================
        // Error Log
        // ==================================================

        new winston.transports.File({

            filename: "logs/error.log",

            level: "error"

        }),

        // ==================================================
        // Combined Log
        // ==================================================

        new winston.transports.File({

            filename: "logs/combined.log"

        })

    ],

    exceptionHandlers: [

        new winston.transports.File({

            filename: "logs/exceptions.log"

        })

    ]

});

// ==========================================================
// Console Logger
// ==========================================================

if (

    process.env.NODE_ENV !== "production"

) {

    logger.add(

        new winston.transports.Console({

            format: combine(

                colorize(),

                timestamp({

                    format: "HH:mm:ss"

                }),

                consoleFormat

            )

        })

    );

}

export default logger;