const cronJob = require('cron').CronJob;
const tasks = require('./model/tasks');

const changeSubmissions = async() =>{
    try {
        let data = tasks.find({Status:"Pending", DurationCompleted:""});
        for (let items of data){
            if(items.EndDate < Date.now()){
                items.DurationCompleted = "Late";
            }
        }
    } catch (error) {
        console.log("Failed to perform cron job");
    }
}

var cornOps = new cronJob(
    '0 0 0 * * *',
    async() =>{
        await changeSubmissions();
    },
    ()=>{console.log("cornjob done")},
    true,
    'Asia/Kolkata'
);

module.exports = cornOps;