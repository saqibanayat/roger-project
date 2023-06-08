'use strict'

const express = require('express')
const router = express.Router()
const { signup, login, accountVerify, users, changePassword, userDetails, userUpdate, forgetLink, updatePassword, forgetPassword, blockUsers, unBlockUsers, allUsers, deleteUser } = require('../controllers/userControllers')
const { isAuthenticatedUser, authenticateToken } = require('../middlewares/authMiddlewares')

router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/verify-account').get(accountVerify)
router.route('/forget-password').get(forgetPassword)
router.route('/changePassword').post(changePassword)
router.route('/user-details').post(userDetails)
router.route('/user-update').post(userUpdate)
router.route('/user-forget-link').post(forgetLink)
router.route('/update-password').post(updatePassword)
router.route('/users').post(users)
router.route('/block-user').post(blockUsers)
router.route('/unblock-user').post(unBlockUsers)
router.route('/all-users').get(allUsers)
router.route('/delete-user/:id').delete(deleteUser)
router.route('/block-user/:id').put(blockUsers)


module.exports = router;