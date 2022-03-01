const ResponseService = require('../shared/ResponseService'); // Response service
const task = require('../models/task'); // Forum_Post model

//create
exports.create = async function (req, res) {
    // try{
    //     const task = await new task(req.body).save();
    //     res.send(task);
    // }catch(error){
    //     res.send(error);
    // }
    task.create({ task_name: req.body.task }, function (err, doc) {
        ResponseService.generalResponse(err, res, "task added successfully");
      });
}

// Get all
exports.getAll = async function (req, res) {

    // Pagination parameters
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const page = req.query.page ? parseInt(req.query.page) : 0;

    const _count = await task.countDocuments();
    const totalPages = Math.ceil(_count / limit);

    task.find((err, doc) => {
        const newPayload = {
            docs: doc,
            totalPages: totalPages,
            totalpost:_count
        }
        ResponseService.generalPayloadResponse(err, newPayload, res);
    }).sort({ addedOn: -1 })
        .skip(page * limit).limit(limit);
}

// delete
exports.delete = async function (req, res) {
   task.findByIdAndRemove(req.body.taskId, (err, doc) => {
        ResponseService.generalResponse(err, res, "task removed successfully");
    });
}

// update task.
exports.updateById= async function (req, res) {
    task.findByIdAndUpdate(req.body.taskId,{ completed: req.body.completed }, { new: true }, (err, doc) => {
        ResponseService.generalResponse(err, res, "vote removed successfully");
    });
}