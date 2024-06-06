const mainController = require("./mainController");

class taskController extends mainController {
    constructor() {
        super();
    }

    createTask = async (req, res) => {
        try {
            if (!req.body) {
                throw new Error("Requrest data not found :: ");
            }
            let userExist = await this.users.findOne({ Email: req.body.email });
            if (userExist == null) {
                throw new Error("user not found :: ");
            }
            let taskExist = await this.tasks.findOne({
                Title: req.body.title,
                UserId: userExist._id,
                Category: req.body.category,
                Status: "Pending"
            });
            if (taskExist != null) {
                throw new Error("Task alreadu exist :: ");
            }
            let [day, month, year] = req.body.endDate.split('-');
            let formattedDate = new Date(`${year}-${month}-${day}`);
            let task = new this.tasks({
                Title: req.body.title,
                UserId: userExist._id,
                Description: (!req.body.desc) ? "" : req.body.desc,
                Category: (!req.body.category) ? "Personal" : req.body.category,
                EndDate: formattedDate,
                Priority: (!req.body.priority) ? "Medium" : req.body.priority,
            });
            await this.tasks.create(task);
            res.status(200).send('Task Created');
        } catch (error) {
            console.log("Create task error :: ", error);
            res.sendStatus(400);
        }
    }
    viewPendingTask = async (req, res) => {
        try {
            if (!req.body.email) {
                throw new Error("Request data not found :: ")
            }
            let userExist = await this.users.findOne({ Email: req.body.email });
            if (userExist == null) {
                throw new Error("user not found :: ");
            }
            let pendingTask = await this.tasks.find({ UserId: userExist._id, Status: "Pending" });
            res.status(200).json(pendingTask);
        } catch (error) {
            console.log("view all pending task error :: ", error);
            res.sendStatus(400);
        }
    }
    viewCompletedTask = async (req, res) => {
        try {
            if (!req.body.email) {
                throw new Error("Request data not found :: ")
            }
            let userExist = await this.users.findOne({ Email: req.body.email });
            if (userExist == null) {
                throw new Error("user not found :: ");
            }
            let completedTask = await this.tasks.find({ UserId: userExist._id, Status: "Completed" });
            res.status(200).json(completedTask);
        } catch (error) {
            console.log("view all Completed task error :: ", error);
            res.sendStatus(400);
        }
    }
    viewOneTask = async (req, res) => {
        try {
            if (!req.body.email || !req.body.taskId) {
                throw new Error("Request data not found :: ")
            }
            let userExist = await this.users.findOne({ Email: req.body.email });
            if (userExist == null) {
                throw new Error("user not found :: ");
            }
            let completedTask = await this.tasks.findById(req.body.taskId);
            res.status(200).json(completedTask);
        } catch (error) {
            console.log("view one task error :: ", error);
            res.sendStatus(400);
        }
    }
    markAsDone = async (req, res) => {
        try {
            if (!req.body) {
                throw new Error("Reqest data not found :: ");
            }
            let userExist = await this.users.findOne({ Email: req.body.email });
            if (userExist == null) {
                throw new Error("user not found :: ");
            }
            let task = await this.tasks.findById(req.body.taskId);
            if (task == null) {
                throw new Error("task not found :: ");
            }
            if (task.Status == "Completed") {
                throw new Error("Task already Completed");
            }
            task.Status = "Completed";
            task.CompletionDate = Date.now();
            let endDate = new Date(task.EndDate);
            if (endDate < task.CompletionDate) {
                task.DurationCompleted = "Late"
            } else {
                task.DurationCompleted = "OnTime"
            }
            await this.tasks.findByIdAndUpdate(task._id, task);
            res.status(200).json(task);
        } catch (error) {
            console.log("Mark As done task error :: ", error);
            res.sendStatus(400);
        }
    }
    deleteTask = async (req, res) => {
        try {
            if (!req.body.email || !req.body.taskId) {
                throw new Error("Reqest data not found :: ");
            }
            let userExist = await this.users.findOne({ Email: req.body.email });
            if (userExist == null) {
                throw new Error("user not found :: ");
            }
            let task = await this.tasks.findOne({ _id: req.body.taskId, Status: "Pending" });
            if (task == null) {
                throw new Error("task not found or task already completed :: ");
            }
            await this.tasks.findByIdAndDelete(task._id);
            res.status(200).send('Task Deleted');
        } catch (error) {
            console.log("delete task error :: ", error);
            res.sendStatus(400);
        }
    }
    editTask = async (req, res) => {
        try {
            if (!req.body) {
                throw new Error("Reqest data not found :: ");
            }
            let userExist = await this.users.findOne({ Email: req.body.email });
            if (userExist == null) {
                throw new Error("user not found :: ");
            }
            let task = await this.tasks.findById(req.body.taskId);
            if (task == null) {
                throw new Error("task not found :: ");
            }
            if (task.Status == "Completed") {
                throw new Error("Task already Completed are not editable :: ");
            }
            (req.body.title) ? task.Title = req.body.title : "";
            (req.body.desc) ? task.Description = req.body.desc : "";
            (req.body.category) ? task.Category = req.body.category : "";
            (req.body.priority) ? task.Priority = req.body.priority : "";
            if (req.body.endDate) {
                let [day, month, year] = req.body.endDate.split('-');
                let formattedDate = new Date(`${year}-${month}-${day}`);
                task.EndDate = formattedDate;
                if (task.EndDate < Date.now()) {
                    task.DurationCompleted = "Late"
                } else {
                    task.DurationCompleted = ""
                }
            }
            await this.tasks.findByIdAndUpdate(task._id, task);
            res.status(200).json(task);
        } catch (error) {
            console.log("Mark As done task error :: ", error);
            res.sendStatus(400);
        }
    }
}

module.exports = new taskController();