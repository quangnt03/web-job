// const cron = require("node-cron");
// const JobModel = require("./models/job.model");

// cron.schedule("*/5 * * * * *", async () => {
//   try {
//     console.log("start");
//     const currentDate = new Date();
//     console.log(currentDate);
//     const expiredJobs = await JobModel.find({
//       //   closedDate: { $lte: currentDate },
//       status: "removed",
//     });

//     if (expiredJobs.length > 0) {
//       for (const job of expiredJobs) {
//         // job.status = "expired";
//         // await job.save();
//         console.log("Expired job:", job);
//       }
//     }
//   } catch (error) {
//     console.error("Error updating job statuses:", error);
//   }
// });

// jobExpireSchedulerMiddleware.js

const cron = require("node-cron");
const JobModel = require("./models/job.model");

const jobExpireScheduler = async () => {
  try {
    console.log("Scheduled task started");
    const currentDate = new Date();
    const expiredJobs = await JobModel.find({
      closedDate: { $lte: currentDate },
      status: "active",
    });

    if (expiredJobs.length > 0) {
      for (const job of expiredJobs) {
        job.status = "expired";
        await job.save();
      }
    }
  } catch (error) {
    console.error("Error updating job statuses:", error);
  }
};

// Schedule the task to run every 5 seconds
cron.schedule("10 16 * * *", jobExpireScheduler);

module.exports = jobExpireScheduler;
