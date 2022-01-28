let userList = require("../data/Users");
const { uid } = require("../common/uid");

exports.addUser = (req, res) => {
  const { name, email } = req.body;
  const userData = {
    id: uid(),
    name,
    email,
  };

  if (!name) {
    return res.status(400).json({ message: "Please Enter Name" });
  }
  if (!email) {
    return res.status(400).json({ message: "Please Enter Email" });
  }
  userList.push(userData);
  res.json({
    message: "User Created Successfully",
    user: userData,
  });
};

exports.getAllUsers = (req, res) => {
  res.json({
    userList,
  });
};

exports.getSingleUser = (req, res) => {
  const id = req.params.id;
  const singleUser = userList.find((user) => {
    return user.id == id;
  });
  if (!singleUser) {
    return res.status(400).json({ message: "No User Found" });
  }
  console.log(singleUser);
  res.json({
    user: singleUser,
  });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  const isUserExist = userList.some((user) => user.id == id);
  if (!isUserExist) {
    return res.status(400).json({ message: "No User Found" });
  }
  userList.forEach((user) => {
    if (user.id == id) {
      user.name = name ? name : user.name;
      user.email = email ? email : user.email;
      return res.json({ msg: "User updated", user });
    }
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const isUserExist = userList.some((user) => user.id === id);
  if (isUserExist) {
    userList = userList.filter((user) => user.id !== id);

    res.json({
      msg: "User deleted successfully",
    });
  } else {
    res.status(400).json({ message: "No User Found" });
  }
};
