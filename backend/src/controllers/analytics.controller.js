import User from "../models/User.js";
import Company from "../models/Company.js";
import Internship from "../models/Internship.js";
import Application from "../models/Application.js";
import Meeting from "../models/Meeting.js";
import Offer from "../models/Offer.js";


export const getDashboardAnalytics = async (req, res) => {

    try {

        const [

            totalUsers,

            totalCompanies,

            totalInternships,

            totalApplications,

            totalInterviews,

            totalOffers

        ] = await Promise.all([

            User.countDocuments(),

            Company.countDocuments(),

            Internship.countDocuments(),

            Application.countDocuments(),

            Meeting.countDocuments(),

            Offer.countDocuments()

        ]);

        return res.status(200).json({

            success: true,

            analytics: {

                totalUsers,

                totalCompanies,

                totalInternships,

                totalApplications,

                totalInterviews,

                totalOffers

            }

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const getMonthlyAnalytics = async (req, res) => {

    try {

        const users = await User.aggregate([

            {

                $group: {

                    _id: {

                        $month: "$createdAt"

                    },

                    total: {

                        $sum: 1

                    }

                }

            },

            {

                $sort: {

                    "_id": 1

                }

            }

        ]);

        const companies = await Company.aggregate([

            {

                $group: {

                    _id: {

                        $month: "$createdAt"

                    },

                    total: {

                        $sum: 1

                    }

                }

            },

            {

                $sort: {

                    "_id": 1

                }

            }

        ]);

        const internships = await Internship.aggregate([

            {

                $group: {

                    _id: {

                        $month: "$createdAt"

                    },

                    total: {

                        $sum: 1

                    }

                }

            },

            {

                $sort: {

                    "_id": 1

                }

            }

        ]);

        const applications = await Application.aggregate([

            {

                $group: {

                    _id: {

                        $month: "$createdAt"

                    },

                    total: {

                        $sum: 1

                    }

                }

            },

            {

                $sort: {

                    "_id": 1

                }

            }

        ]);

        const interviews = await Meeting.aggregate([

            {

                $group: {

                    _id: {

                        $month: "$createdAt"

                    },

                    total: {

                        $sum: 1

                    }

                }

            },

            {

                $sort: {

                    "_id": 1

                }

            }

        ]);

        const offers = await Offer.aggregate([

            {

                $group: {

                    _id: {

                        $month: "$createdAt"

                    },

                    total: {

                        $sum: 1

                    }

                }

            },

            {

                $sort: {

                    "_id": 1

                }

            }

        ]);

        return res.status(200).json({

            success: true,

            analytics: {

                users,

                companies,

                internships,

                applications,

                interviews,

                offers

            }

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};