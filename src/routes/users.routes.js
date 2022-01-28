const express = require("express");
const {
  addUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const router = express.Router();

router.post("/", addUser);

router.get("/", getAllUsers);

router.get("/:id", getSingleUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
