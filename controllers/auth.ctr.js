const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const asyncHandler = require('express-async-handler');

const UserModel = require('../models/user.model');
const userService = require('../services/user.service');
const generateToken = require('../utils/GenerateToken');
const InvalidArgumentError = require('../exceptions/InvalidArgumentException');
const ResourceNotFoundException = require('../exceptions/ResourceNotFoundException');
const UnauthorizedException = require('../exceptions/UnauthorizedException');

module.exports = {
  createUser: asyncHandler(async (req, res) => {
    const userWithEmail = await userService.findUserByEmail(req.body.email);
    if (userWithEmail) {
      return res.status(400).json({
        success: false,
        field: 'email',
        msg: 'Email already exists',
      });
    }
    const newUser = await UserModel.create(req.body);
    const user = newUser.toObject();
    return res
      .status(StatusCodes.CREATED)
      .json({
        status: ReasonPhrases.CREATED,
        data: {
          id: user._id,
          email: user.email,
          role: user.role,
          isActive: user.isActive,
        },
      });
  }),

  login: asyncHandler(async (req, res) => {
    const userWithEmail = await userService.findUserByEmail(req.body.email);

    if (!userWithEmail) {
      return res.status(401).json({
        success: false,
        field: 'email',
        msg: 'Email not found',
      });
    }

    const isMatchedPassword = await userWithEmail.comparePassword(req.body.password);

    if (!isMatchedPassword) {
      return res.status(401).json({
        success: false,
        field: 'password',
        msg: 'Incorrect password',
      });
    }

    const token = generateToken({
      id: userWithEmail.id,
      role: userWithEmail.role,
    });

    return res.status(200).json({
      status: ReasonPhrases.ACCEPTED,
      token,
    });
  }),
};
