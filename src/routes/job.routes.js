const express = require("express");
const auth = require("../middlewares/auth");
const {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob
} = require("../controllers/job.controller");

const router = express.Router();
router.post("/", auth, createJob);
router.get("/", auth, getJobs);
router.get("/:id", auth, getJobById);
router.put("/:id", auth, updateJob);
router.delete("/:id", auth, deleteJob);

module.exports = router;
