const  User= require("../models/user");

module.exports = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      throw { status: 404, message: "User does not exist..." };
    }
    console.log(user._id)
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res
      .status(err.status || 500)
      .send(err.message || "Something went wrong");
  }
};