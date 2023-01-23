const axios = require("axios");
const blogs = require("../model/blogs");

//Homepage
const homepage = async (req, res) => {
  try {
    const date = new Date();
    // console.log(
    //   date.toLocaleString("en-IN", {
    //     weekday: "long",
    //     month: "long",
    //     year: "numeric",
    //   })
    // );
    const apiData = await axios.get(process.env.BLOGS_API);
    const data = await apiData.data;
    // console.log(data)
    //console.log(data[1].primary_category.description);
    res.render("main", {
      title: "Homepage",
      data: data,
      style: "home.css",
      date: date.toLocaleString("en-IN", {
        weekday: "long",
        month: "long",
        year: "numeric",
      }),
    });
  } catch (error) {
    res.send("<p>Something went wrong.</p>");
  }
};

// 404 PAGE
const notFound = (req, res) => {
  res.render("notFound", { title: "Page not found", style: "notfound.css" });
};
// blog page
const blog = async (req, res) => {
  const id = req.params.id;
  try {
    const idData = await axios.get(process.env.BLOGS_API2 + id);
    const resp = idData;
    //console.log("about page", resp);
    res.render("blog", {
      title: "Blogs",
      id: id,
      resp: resp,
    });
  } catch (error) {
    res.send("<p>Something went wrong.</p>");
  }
};
// about project
const aboutProject = (req, res) => {
  res.render("thisProject", { title: "About This Project", style: "atp.css" });
};
// about me
const aboutMe = (req, res) => {
  res.render("aboutMe", { title: "About Me", style: "atp.css" });
};
// contact me
const contactMe = (req, res) => {
  res.render("contactMe", { title: "Contact Me", style: "atp.css" });
};

// const getBlogs = async (req, res) => {
//   try {
//     const allBlogs = await blogs.find();
//     console.log(allBlogs);
//     res.render("getBlogs", { title: "Your Blogs", data: allBlogs });
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// };

// const postBlog = (req, res) => {
//   res.render("postBlog", { title: "Post a Blog" });
// };

module.exports = {
  homepage,
  blog,
  aboutProject,
  aboutMe,
  contactMe,
  notFound,
};
