const JobModel = require("../models/job.model");

module.exports = {
  //Get all jobs
  async getAllJobs(req, res) {
    try {
      console.log("Start");
      const { page = 1, limit = 5 } = req.query;
      const options = {
        page: page,
        limit: limit,
      };
      const result = await JobModel.paginate({}, options);
      res.json(result);
    } catch (error) {
      console.error("Error fetching job data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  //Get data of a job by its ID
  async getJobById(req, res) {
    try {
      const jobId = req.params.jobId;
      const job = await JobModel.findById(jobId);

      if (!job) {
        return res.status(404).json({ error: "Job not found" });
      }
      res.json(job);
    } catch (error) {
      console.error("Error fetching job data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  //Search for jobs by key words
  async searchJobByKeyWord(req, res) {
    try {
      const searchTerm = req.body.searchTerm;
      console.log("search term", searchTerm);
      const regex = new RegExp(searchTerm, "i");
      const searchResult = await JobModel.find({
        $or: [
          { title: regex },
          { position: regex },
          { description: regex },
          { company: regex },
        ],
      });

      res.json(searchResult);
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred while searching for jobs.");
    }
  },
};
