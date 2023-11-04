const JobModel = require("../models/job.model");
module.exports = {
  // Get all jobs
  async getAllJobs(req, res) {
    try {
      const { page = 1, limit = 5 } = req.query;
      const options = {
        page: page,
        limit: limit,
        sort: { createdAt: -1 },
      };
      const result = await JobModel.paginate({}, options);
      res.json(result);
    } catch (error) {
      console.error("Error fetching job data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Get data of a job by its ID
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
      console.log(req.body);
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

  // Create a new job listing
  async createNewJob(req, res) {
    try {
      console.log(req.body);
      const job = new JobModel({
        title: req.body.title,
        company: req.body.company,
        logo: req.body.logo,
        createdAt: req.body.createdAt,
        closedDate: req.body.closedDate,
        createdBy: req.body.createdBy,
        salary: req.body.salary,
        location: req.body.location,
        field: req.body.field,
        position: req.body.position,
        maxApplicants: req.body.maxApplicants,
        description: req.body.description,
        status: req.body.status,
        applicants: req.body.applicants,
      });

      await job.save();

      res.json({ status: "Job created successfully" });
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, error: "An error occurred" });
    }
  },

  //Find jobs created by a specific company
  async getJobListByCompany(req, res) {
    try {
      const companyCreatedJobs = await JobModel.find({
        company: req.body.company,
      });
      console.log(companyCreatedJobs);
      if (!companyCreatedJobs) {
        throw new Error("Jobs not found");
      }
      res.json(companyCreatedJobs);
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, error: "An error occurred" });
    }
  },
};
