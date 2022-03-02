const Task = require("../models/task");
const express = require("express");
const router = express.Router();
const ResponseService = require('../shared/ResponseService'); // Response service

router.post("/", async (req, res) => {
    try {
        const task = await new Task(req.body).save();
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {

    // try {
    //     const task = await Task.findByIdAndDelete(req.params.id);
    //     res.send(task);
    // } catch (error) {
    //     res.send(error);
    // }
    
    Task.findByIdAndRemove(req.body.taskId, (err, doc) => {
        ResponseService.generalResponse(err, res, "task removed successfully");
    });
});

module.exports = router;
