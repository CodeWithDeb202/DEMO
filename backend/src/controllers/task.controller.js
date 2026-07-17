import Task from "../models/Task.js";

export const createTask = async (req, res) => {

    try {

        const {

            title,

            description,

            assignedTo,

            internship,

            dueDate

        } = req.body;

        const task = await Task.create({

            title,

            description,

            assignedBy: req.user._id,

            assignedTo,

            internship,

            dueDate

        });

        return res.status(201).json({

            success: true,

            message: "Task created successfully",

            task

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getMyTasks = async (req, res) => {

    try {

        const tasks = await Task.find({

            assignedTo: req.user._id

        })

        .populate("assignedBy", "firstName lastName email")

        .sort({

            createdAt: -1

        });

        return res.status(200).json({

            success: true,

            tasks

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const updateTask = async (req, res) => {

    try {

        const task = await Task.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new: true

            }

        );

        if (!task) {

            return res.status(404).json({

                success: false,

                message: "Task not found"

            });

        }

        return res.status(200).json({

            success: true,

            message: "Task updated",

            task

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const deleteTask = async (req, res) => {

    try {

        const task = await Task.findById(req.params.id);

        if (!task) {

            return res.status(404).json({

                success: false,

                message: "Task not found"

            });

        }

        await Task.findByIdAndDelete(req.params.id);

        return res.status(200).json({

            success: true,

            message: "Task deleted"

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const updateTaskStatus = async (req, res) => {

    try {

        const { status } = req.body;

        const task = await Task.findById(req.params.id);

        if (!task) {

            return res.status(404).json({

                success: false,

                message: "Task not found"

            });

        }

        task.status = status;

        await task.save();

        return res.status(200).json({

            success: true,

            message: "Task status updated",

            task

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};