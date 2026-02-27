const ApiResponse = require("../utils/apiResponse");

exports.getPosts = (req, res) => {
  res.status(200).json(
    new ApiResponse(true, "Posts fetched successfully", [])
  );
};

exports.createPost = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json(
      new ApiResponse(false, "Title is required")
    );
  }

  res.status(201).json(
    new ApiResponse(true, "Post created successfully", { title })
  );
};