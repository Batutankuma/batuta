var express = require('express');
var router = express.Router();
var Controller = require('./../controllers/user_ctr');
var controller = new Controller();
var Authentification = require('./../middlewares/auth/auth.basic');
var {VerifyToken} = new Authentification();


router.post('/users/signup',controller.singUp);
router.post('/users/login',controller.logIn);
router.get('/users/profil',VerifyToken,controller.findId);
router.get('/users',VerifyToken,controller.findAll);
router.put('/users/:id',VerifyToken,controller.updateId);
router.delete('/users/:id',VerifyToken,controller.deleteId);

module.exports = router;