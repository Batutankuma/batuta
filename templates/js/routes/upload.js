var express = require('express');
var router = express.Router();
var Notification = require('./../middlewares/notification/notification');
var {_success} = new Notification();
var multer = require('./../middlewares/storage_config/multer_config');

router.post('/upload',multer,(req,res)=>{
    let file = `${req.protocol}://${req.get('host')}/${req.file.filename}`;
    _success(res,201,{url:file});
});

module.exports = router;