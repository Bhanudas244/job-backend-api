const express = require("express");
const router = express.Router();

const userRoute = require("./auth.routes");
const jobRoute = require("./job.routes");

router.use("/user", userRoute); // User Routes
router.use("/job", jobRoute);   // Job Routes

// Root Route
router.get("/", async (req, res) => {
  return res.json({ message: "Welcome to the JOB Backend APIs!" });
});



module.exports = router;
