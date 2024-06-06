const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    Title: {
        type: String,
        requires: [true, "Title is required"],
        min: [6, "Title must be of minimum 6 character"],
        max: [20, "Title must be of maximum 20 character"]
    },
    Description: {
        type: String,
        requires: false,
        max: [200, "Description must be of maximum 200 character"]
    },
    Category: {
        type: String,
        required: true,
        default: "Personal",
        enum: ["Work/Professional", "Personal", "Family", "Finance", "Health"]
    },
    StartDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    EndDate: {
        type: Date,
        required: false
    },
    CompletionDate: {
        type: Date,
        required: false
    },
    Priority: {
        type: String,
        required: true,
        default: "Medium",
        enum: ["High", "Medium", "Low"]
    },
    Status: {
        type: String,
        required: true,
        default: "Pending",
        enum: ["Pending", "Completed"]
    },
    DurationCompleted: {
        type: String,
        required: false,
        enum: ["Late", "OnTime"]
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "Enter a valid user"]
    }
});

const tasks = mongoose.model('tasks', taskSchema);

module.exports = tasks;