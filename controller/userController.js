const userModel = require("../model/userModel");

const userController = {
  showAllUsers: (req, res) => {
    userModel.getAllUsers((err, users) => {
      if (err) throw err;
      res.render("index.njk", { users: users.rows });
    });
  },

  createUserForm: (req, res) => {
    res.render("create.njk");
  },

  saveUser: (req, res) => {
    userModel.createUser(req.body, (err) => {
      if (err) throw err;
      res.redirect("/");
    });
  },

  editUserForm: (req, res) => {
    userModel.getUserById(req.params.id, (err, results) => {
      if (err) throw err;
      res.render("edit.njk", { user: results[0] });
    });
  },

  updateUser: (req, res) => {
    userModel.updateUser(req.params.id, req.body, (err) => {
      if (err) throw err;
      res.redirect("/");
    });
  },

  deleteUser: (req, res) => {
    userModel.deleteUser(req.params.id, (err) => {
      if (err) throw err;
      res.redirect("/");
    });
  },

  // RESTful API versions

  saveUser1: async (req, res) => {
    try {
      userModel.createUser(req.body, (err) => {
        if (err)
          return res
            .status(500)
            .json({ message: "Failed to create user", error: err });
        res.status(201).json({ message: "User created successfully" });
      });
    } catch (error) {
      res.status(500).json({ message: "Unexpected server error", error });
    }
  },

  showAllUsers1: async (req, res) => {
    try {
      userModel.getAllUsers((err, users) => {
        if (err)
          return res
            .status(500)
            .json({ message: "Error fetching users", error: err });
        res.status(200).json({ users });
      });
    } catch (error) {
      res.status(500).json({ message: "Unexpected server error", error });
    }
  },

  getUserById: async (req, res) => {
    try {
      userModel.getUserById(req.params.id, (err, results) => {
        if (err)
          return res
            .status(500)
            .json({ message: "Failed to fetch user", error: err });
        if (!results.length)
          return res.status(404).json({ message: "User not found" });
        res.status(200).json({ user: results[0] });
      });
    } catch (error) {
      res.status(500).json({ message: "Unexpected server error", error });
    }
  },

  updateUser1: async (req, res) => {
    try {
      userModel.updateUser(req.params.id, req.body, (err) => {
        if (err)
          return res
            .status(500)
            .json({ message: "Failed to update user", error: err });
        res.status(200).json({ message: "User updated successfully" });
      });
    } catch (error) {
      res.status(500).json({ message: "Unexpected server error", error });
    }
  },

  deleteUser1: async (req, res) => {
    try {
      userModel.deleteUser(req.params.id, (err) => {
        if (err)
          return res
            .status(500)
            .json({ message: "Failed to delete user", error: err });
        res.status(200).json({ message: "User deleted successfully" });
      });
    } catch (error) {
      res.status(500).json({ message: "Unexpected server error", error });
    }
  },
};

module.exports = userController;
