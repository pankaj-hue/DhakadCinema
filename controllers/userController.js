const User = require('./../models/userModel');
const catchAsync = require('../utils/catchAsync');

//Routeuserhanddlers
//1
exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    message: 'success',
    results: users.length,
    data: {
      user: users,
    },
  });
});

//2
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not deined',
    data: {
      users: users,
    },
  });
};

//3
exports.getUserByID = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not deined',
    data: {
      users: users,
    },
  });
};

//4
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not deined',
    data: {
      users: users,
    },
  });
};

//5
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not deined',
    data: {
      users: users,
    },
  });
};
