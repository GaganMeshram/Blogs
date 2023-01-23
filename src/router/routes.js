const express = require("express");
const blogs = require("../model/blogs");

const {
  homepage,
  notFound,
  blog,
  aboutProject,
  aboutMe,
  contactMe,
} = require("../controllers/controller");
const router = express.Router();
const nodemail = require("nodemailer");

router.get("/", homepage);
router.get("/blog/:id", blog);
router.get("/thisProject", aboutProject);
router.get("/aboutMe", aboutMe);
router.get("/contactMe", contactMe);
router.post("/postBlog", async (req, res) => {
  const data = req.body;
  try {
    const newBlog = await blogs.create(data);
    res.json(newBlog);
  } catch (error) {
    console.log(error);
  }
});
router.post("/contactMe", (req, res) => {
  console.log(req.body);
  const transporter = nodemail.createTransport({
    service: "gmail",
    auth: {
      user: "gmeshram774@gmail.com",
      pass: "ajioepwrtoguvrbz",
    },
  });
  const mailOptions = {
    from: req.body.email,
    to: "gmeshram774@gmail.com",
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
});
router.get("*", notFound);

module.exports = router;
