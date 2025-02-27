const Users = require("../modals/userModel");

const users = async (req, res) => {
  try {
    const userList = await Users.find().select("name age gender movie");
    res.status(200).json(userList);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = { users };
